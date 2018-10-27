import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { TextInput } from 'ionic-angular';

/**
 * Generated class for the SkLoginAComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sk-login-a',
  templateUrl: 'sk-login-a.html'
})
export class SkLoginAComponent {
  @Output() login: EventEmitter<any> = new EventEmitter<any>();
  @Output() facebook: EventEmitter<any> = new EventEmitter<any>();
  @Output() google: EventEmitter<any> = new EventEmitter<any>();
  @Output() register: EventEmitter<any> = new EventEmitter<any>();
  @Output() forgotPassword: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('username') username: TextInput;
  @ViewChild('password') password: TextInput;
  credentials: any = {};
  constructor() {
    console.log('Hello SkLoginAComponent Component');
  }

  handleEnter(input) {
    if (input === 'username') {
      setTimeout(() => {
        this.username.focusNext();
      }, 0);
    } else {
      setTimeout(() => {
        this.password.setBlur();
      }, 0);
    }

  }

  clickLogin() {
    this.login.emit(this.credentials);
  }

  clickFacebook() {
    this.facebook.emit();
  }

  clickGoogle() {
    this.google.emit();
  }

  clickRegister() {
    this.register.emit();
  }

  clickForgotPassword() {
    this.forgotPassword.emit();
  }

}
