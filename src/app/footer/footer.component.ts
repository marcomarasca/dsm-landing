import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  yearStart = 2019;
  yearCurrent = new Date().getFullYear();
  yearValue: string;

  constructor() { }

  ngOnInit() {
    this.yearValue = this.yearCurrent - this.yearStart === 0 ? String(this.yearCurrent) : this.yearStart + ' - ' + this.yearCurrent;
  }

}
