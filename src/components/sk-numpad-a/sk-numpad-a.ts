import { Component, Output, EventEmitter, Input } from '@angular/core';

/**
 * Generated class for the SkNumpadAComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sk-numpad-a',
  templateUrl: 'sk-numpad-a.html'
})
export class SkNumpadAComponent {
  @Input() type: string;
  @Output() number: EventEmitter<string> = new EventEmitter<string>();
  text: string = '';
  constructor() {
    console.log('Hello SkNumpadAComponent Component');
  }

  numberText(text) {
    this.text += text;
    this.returnNumber();
  }

  delNumberText() {
    if (this.text) {
      this.text = this.text.slice(0, this.text.length - 1);
      this.returnNumber();
    }
  }

  clearNumberText() {
    this.text = '';
    this.returnNumber();
  }

  returnNumber() {
    this.number.emit(this.text);
  }

  getTextLength() {
    let arr = [];
    for (let i = 0; i < this.text.length; i++) {
      arr.push(i);
    }
    return arr;
  }

}
