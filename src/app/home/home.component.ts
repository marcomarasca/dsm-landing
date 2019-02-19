import { Component, OnInit, OnDestroy } from '@angular/core';
import { APP_LIST, IApplication } from './../application';
import { StreamService } from '../live/stream.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {

  apps: IApplication[] = APP_LIST;
  private streamServiceSub: Subscription;

  constructor(private streamService: StreamService) { }

  ngOnInit(): void {
    const liveApp = this.apps.filter(app => app.name === 'Live')[0];
    // Uses the stream service subject to get the current value
    this.streamServiceSub = this.streamService.isAlive.subscribe(isAlive => {
      liveApp.disabled = !isAlive;
    });
  }

  ngOnDestroy(): void {
    this.streamServiceSub.unsubscribe();
  }
}
