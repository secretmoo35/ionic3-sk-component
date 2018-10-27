import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TextInput } from 'ionic-angular';

/**
 * Generated class for the ProfileAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-a',
  templateUrl: 'profile-a.html',
})
export class ProfileAPage {
  @ViewChild('firstname') firstname: TextInput;
  @ViewChild('lastname') lastname: TextInput;
  @ViewChild('email') email: TextInput;
  @ViewChild('phonenumber') phonenumber: TextInput;
  profile: any;
  isEdit: Boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController
  ) {
    this.profile = {
      profileImage: './assets/imgs/profile-a/profile-a.jpg',
      firstname: 'Jone',
      lastname: 'Doe',
      email: 'jane.doe@gmail.com',
      phonenumber: '+12015550123',
      post: 254,
      followers: 8901,
      following: 423
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileAPage');
  }

  handleEnter(input) {
    if (input === 'phonenumber') {
      setTimeout(() => {
        this[input].setBlur();
      }, 0);
    } else {
      setTimeout(() => {
        this[input].focusNext();
      }, 0);
    }

  }

  onEdit() {
    this.isEdit = true;
  }

  onSave() {
    this.isEdit = false;
    let toast = this.toastCtrl.create({
      message: 'Save Profile Success.',
      duration: 1000
    });
    toast.present();
  }

}
