import { Component, Input } from '@angular/core';
import { defaults } from "../config";

@Component({
  selector: 'ion-calendar-week',
  template: `
    <ion-toolbar class="week-toolbar" no-border-top>
      <ul [class]="'week-title ' + color">
        <li *ngFor="let w of _weekArray">{{w}}</li>
      </ul>
    </ion-toolbar>
  `,
})

export class CalendarWeekComponent {

  _weekArray: string[] = defaults.WEEKS_FORMAT;
  _weekStart: number = 0;
  @Input() color: string = defaults.COLOR;

  constructor() {
  }

  @Input()
  set weekArray(value: string[]) {
    if (value && value.length === 7) {
      this._weekArray = value.slice();
      this.adjustSort();
    }
  }

  @Input()
  set weekStart(value: number) {
    if (value === 0 || value === 1) {
      this._weekStart = value;
      this.adjustSort();
    }
  }

  adjustSort() {
    if (this._weekStart === 1) {
      this._weekArray.push(this._weekArray.shift())
    }
  }

}
