import { Component } from '@angular/core';
import { StreamService } from './stream.service';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent {
  stream: string;
  isAlive: BehaviorSubject<boolean>;

  constructor(streamService: StreamService) {
    this.stream = environment.streamUrl;
    this.isAlive = streamService.isAlive;
  }

}
