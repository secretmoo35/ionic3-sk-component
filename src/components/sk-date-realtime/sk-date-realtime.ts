import { Component, Input } from '@angular/core';

/**
 * Generated class for the SkDateRealtimeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sk-date-realtime',
  templateUrl: 'sk-date-realtime.html'
})
export class SkDateRealtimeComponent {
  @Input() format: string;
  date: any;

  constructor() {
    console.log('Hello SkDateRealtimeComponent Component');
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }

}
