import { Component } from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent {
  stream: string = environment.streamUrl;
}
