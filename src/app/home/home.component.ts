import { Component, OnInit } from '@angular/core';
import { APP_LIST, IApplication } from './../application';
import { StreamService } from '../live/stream.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  apps: IApplication[] = APP_LIST;

  constructor(private streamService: StreamService) { }

  ngOnInit(): void {
    const liveApp = this.apps.filter(app => app.name === 'Live')[0];
    // Uses the stream service subject to get the current value
    this.streamService.isAlive.subscribe(isAlive => {
      liveApp.disabled = !isAlive;
    });
  }
}
