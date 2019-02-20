import { Component } from '@angular/core';
import { APP_LIST, IApplication } from './../application';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  apps: IApplication[] = APP_LIST;

}
