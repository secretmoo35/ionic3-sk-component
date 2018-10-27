import { Component, Output, ViewChild, EventEmitter } from '@angular/core';
import { TextInput } from 'ionic-angular';

/**
 * Generated class for the SkRegisterCComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sk-register-c',
  templateUrl: 'sk-register-c.html'
})
export class SkRegisterCComponent {
  @Output() register: EventEmitter<any> = new EventEmitter<any>();
  @Output() login: EventEmitter<any> = new EventEmitter<any>();
  @Output() facebook: EventEmitter<any> = new EventEmitter<any>();
  @Output() google: EventEmitter<any> = new EventEmitter<any>();
  @Output() twister: EventEmitter<any> = new EventEmitter<any>();
  @Output() linkedIn: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('username') username: TextInput;
  @ViewChild('password') password: TextInput;
  @ViewChild('firstname') firstname: TextInput;
  @ViewChild('lastname') lastname: TextInput;
  @ViewChild('email') email: TextInput;
  @ViewChild('phonenumber') phonenumber: TextInput;
  credentials: any = {};
  constructor() {
    console.log('Hello SkRegisterCComponent Component');
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

  clickFacebook() {
    this.facebook.emit();
  }

  clickGoogle() {
    this.google.emit();
  }

  clickTwister() {
    this.twister.emit();
  }

  clickLinkedIn() {
    this.linkedIn.emit();
  }

}
