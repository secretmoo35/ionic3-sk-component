import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NumpadBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-numpad-b',
  templateUrl: 'numpad-b.html',
})
export class NumpadBPage {
  numText: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NumpadBPage');
  }

  onNumber(event) {
    this.numText = event;
  }
}
