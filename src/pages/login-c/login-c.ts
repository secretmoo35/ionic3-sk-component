import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginCPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-c',
  templateUrl: 'login-c.html',
})
export class LoginCPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginCPage');
  }

  onLogin(event) {
    console.log(event);
    let toast = this.toastCtrl.create({
      message: 'Login Success.',
      duration: 1000
    });
    toast.present();
  }

  onFacebook() {
    let toast = this.toastCtrl.create({
      message: 'Login With Facebook.',
      duration: 1000
    });
    toast.present();
  }

  onGoogle() {
    let toast = this.toastCtrl.create({
      message: 'Login With Google.',
      duration: 1000
    });
    toast.present();
  }

  onTwister() {
    let toast = this.toastCtrl.create({
      message: 'Login With Twister.',
      duration: 1000
    });
    toast.present();
  }

  onLinkedIn() {
    let toast = this.toastCtrl.create({
      message: 'Login With LinkedIn.',
      duration: 1000
    });
    toast.present();
  }

  onRegister() {
    let toast = this.toastCtrl.create({
      message: 'Register.',
      duration: 1000
    });
    toast.present();
  }

  onForgotPassword() {
    let toast = this.toastCtrl.create({
      message: 'Forgot Password.',
      duration: 1000
    });
    toast.present();
  }

}
