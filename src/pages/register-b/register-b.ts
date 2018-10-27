import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-b',
  templateUrl: 'register-b.html',
})
export class RegisterBPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterBPage');
  }

  onRegister(event) {
    console.log(event);
    let toast = this.toastCtrl.create({
      message: 'Register Success.',
      duration: 1000
    });
    toast.present();
  }

  goLogin() {
    let toast = this.toastCtrl.create({
      message: 'Go to LoginPage.',
      duration: 1000
    });
    toast.present();
  }

}
