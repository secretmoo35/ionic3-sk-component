import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the NumpadAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-numpad-a',
  templateUrl: 'numpad-a.html',
})
export class NumpadAPage {
  numText: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NumpadAPage');
  }

  onNumber(event) {
    this.numText = event;
  }

  onSubmit() {
    let toast = this.toastCtrl.create({
      message: this.numText,
      duration: 1000
    });
    toast.present();
  }

}
