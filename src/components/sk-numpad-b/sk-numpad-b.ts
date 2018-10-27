import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the SkNumpadBComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sk-numpad-b',
  templateUrl: 'sk-numpad-b.html'
})
export class SkNumpadBComponent {
  @Input() type: string;
  @Input() randomPad: Boolean = false;
  @Output() number: EventEmitter<string> = new EventEmitter<string>();
  text: string = '';
  textPassword: string = '';
  numberPad: Array<any> = [{
    row: []
  }, {
    row: []
  }, {
    row: []
  }, {
    row: []
  }];
  constructor() {
    console.log('Hello SkNumpadBComponent Component');
  }

  ngAfterViewInit() {
    if (this.randomPad) {
      let a = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      let n = a.length;

      for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
      }
      this.numberPad[0].row = a.slice(0, 3);
      this.numberPad[1].row = a.slice(3, 6);
      this.numberPad[2].row = a.slice(6, 9);
      this.numberPad[3].row = a.slice(9, 10);
    }
  }

  numberText(text) {
    this.text += text;
    this.textPassword += text;
    this.returnNumber();
    setTimeout(() => {
      this.textPassword = '';
      for (let i = 0; i < this.text.length; i++) {
        this.textPassword += '*';
      }
    }, 200);
  }

  delNumberText() {
    if (this.text) {
      this.text = this.text.slice(0, this.text.length - 1);
      this.textPassword = this.textPassword.slice(0, this.textPassword.length - 1);
      this.returnNumber();
    }
  }

  clearNumberText() {
    this.text = '';
    this.textPassword = '';
    this.returnNumber();
  }

  returnNumber() {
    this.number.emit(this.text);
  }
}
