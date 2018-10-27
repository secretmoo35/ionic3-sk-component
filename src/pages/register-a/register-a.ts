import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-a',
  templateUrl: 'register-a.html',
})
export class RegisterAPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterAPage');
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
