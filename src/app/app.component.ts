import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { StreamService } from './live/stream.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(titleService: Title, streamService: StreamService) {
    titleService.setTitle(environment.title);
    streamService.init();
  }
}
