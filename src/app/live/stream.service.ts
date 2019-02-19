import { Injectable } from '@angular/core';
import { PingService } from '../ping.service';
import { BehaviorSubject, timer } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  isAlive: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(pingService: PingService) {
    this.init(pingService);
  }

  private init(pingService: PingService) {
    // Creates a timer to ping every x seconds,
    const emitter = timer(0, environment.pingFrequency);
    // The service is a singleton (no need to unsubscribe)
    emitter.subscribe(_ => {
      // Ping the stream and updates the subject
      pingService.ping(environment.streamUrl).subscribe(result => {
        this.isAlive.next(result);
      });
    });
  }

}
