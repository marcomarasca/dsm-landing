import { Component, Input, OnInit } from '@angular/core';

import { IApplication } from '../application';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() app: IApplication;

  constructor() { }

  ngOnInit() {
    if (this.app.isNas && (this.app.url.includes('/') || this.app.url.includes(':'))) {
      this.app.url = 'https://' + environment.baseUrl + this.app.url;
    } else if (this.app.isNas) {
      this.app.url = 'http://' + this.app.url + '.' + environment.baseUrl;
    }
  }
}
