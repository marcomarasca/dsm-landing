import { Component, Input, OnInit } from '@angular/core';
import { IApplication } from '../application';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() app: IApplication;

  constructor() { }

  ngOnInit() {
  }

}
