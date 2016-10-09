import { Component } from '@angular/core';

import { Mention } from '../mention/mention';
import { COMMON_NAMES } from './common-names';
import { TinyMCE } from './tinymce.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: string[] = COMMON_NAMES;
}