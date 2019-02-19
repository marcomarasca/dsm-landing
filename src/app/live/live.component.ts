import { Component } from '@angular/core';
import { StreamService } from './stream.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent {
  isAlive: BehaviorSubject<boolean>;

  constructor(streamService: StreamService) {
    this.isAlive = streamService.isAlive;
  }

}
