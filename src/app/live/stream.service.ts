import { Injectable } from '@angular/core';
import { PingService } from '../ping.service';
import { BehaviorSubject, timer } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  isAlive: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private pingService: PingService) {
    // Creates a timer to ping every x seconds
    timer(0, environment.pingFrequency).subscribe(_ => {
      // Ping the stream and updates the subject
      this.pingService.ping(environment.streamUrl).subscribe(result => {
        this.isAlive.next(result);
      });
    });
  }

}
