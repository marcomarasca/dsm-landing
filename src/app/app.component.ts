import { Component } from '@angular/core';
import { APP_LIST } from './application';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  apps = APP_LIST;
}
