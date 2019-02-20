import { Injectable } from '@angular/core';
import { PingService } from '../ping.service';
import { BehaviorSubject, timer } from 'rxjs';
import { environment } from '../../environments/environment';
import { APP_LIST } from "../application";

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  private aliveSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isAlive = this.aliveSubject.asObservable();

  constructor(private pingService: PingService) { }

  init() {
    const liveApp = APP_LIST.find(app => app.name === 'Live');

    // No live app, no need to ping
    if (liveApp === undefined) {
      return;
    }

    // Creates a timer to ping every x seconds,
    const emitter = timer(0, environment.pingFrequency);
    // The service is a singleton (no need to unsubscribe)
    emitter.subscribe(i => {
      // Ping the stream and updates the subject
      this.pingService.ping(environment.streamUrl).subscribe(result => {
        liveApp.disabled = !result;
        this.aliveSubject.next(result);
      });
    });

  }

}
