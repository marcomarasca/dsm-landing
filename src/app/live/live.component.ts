import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { StreamService } from './stream.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent {
  stream: string = environment.streamUrl;
  isAlive: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private streamService: StreamService) {
    this.isAlive = streamService.isAlive;
  }

}
