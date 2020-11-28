import { Component, Input, OnInit } from '@angular/core';

import { IApplication } from '../application';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  static readonly local = '192.168.';
  @Input() app: IApplication;

  constructor() { }

  ngOnInit() {
    if (!this.app.url.includes('http')) {
      if (window.location.hostname.startsWith(ButtonComponent.local)) {
        this.app.url = `http${this.app.isAdmin ? 's' : ''}://${ButtonComponent.local}:${this.app.localUrl}`;
      } else {
        this.app.url = `https://${this.app.url}${environment.baseUrl}`;
      }
    }
  }
}
