import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, timeout } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PingService {

  constructor(private http: HttpClient) { }

  public ping(url: string): Observable<boolean> {
    return this.http.head(url).pipe(
      timeout(environment.pingTimeout),
      map(_ => true),
      catchError(_ => of(false))
    );
  }
}
