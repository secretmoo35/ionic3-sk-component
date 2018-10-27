import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { TextInput } from 'ionic-angular';

/**
 * Generated class for the SkRegisterBComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sk-register-b',
  templateUrl: 'sk-register-b.html'
})
export class SkRegisterBComponent {
  @Output() register: EventEmitter<any> = new EventEmitter<any>();
  @Output() login: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('username') username: TextInput;
  @ViewChild('password') password: TextInput;
  @ViewChild('firstname') firstname: TextInput;
  @ViewChild('lastname') lastname: TextInput;
  @ViewChild('email') email: TextInput;
  @ViewChild('phonenumber') phonenumber: TextInput;
  credentials: any = {};
  constructor() {
    console.log('Hello SkRegisterBComponent Component');
  }

  handleEnter(input) {
    if (input === 'firstname' || input === 'lastname' || input === 'email' || input === 'phonenumber' || input === 'username') {
      setTimeout(() => {
        this[input].focusNext();
      }, 0);
    } else {
      setTimeout(() => {
        this[input].setBlur();
      }, 0);
    }

  }

  clickRegister() {
    this.register.emit(this.credentials);
  }

  clickGoLogin() {
    this.login.emit();
  }
}
