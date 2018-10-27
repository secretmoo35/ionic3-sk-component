import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ChatListAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-list-a',
  templateUrl: 'chat-list-a.html',
})
export class ChatListAPage {
  chats: Array<any> = [];
  searchText: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController
  ) {
    this.chats = [{
      displayname: 'Goat Doe',
      profileImage: './assets/imgs/chat-list-a/profile2.png',
      lastmessage: 'I love nature always Is beautiful. as long as we keep it together, it will stay with us forever.',
      created: new Date(),
      status: 'online'
    }, {
      displayname: 'Min An',
      profileImage: './assets/imgs/chat-list-a/profile5.jpeg',
      lastmessage: 'HAHA :) :=) ^^ ^_^ <3',
      created: new Date().setDate(new Date().getDate() - 15),
      status: 'online'
    }, {
      displayname: 'Jone Doe',
      profileImage: './assets/imgs/chat-list-a/profile3.png',
      lastmessage: 'WOW! INature is always amazing.',
      created: new Date().setDate(new Date().getDate() - 10),
      status: 'busy'
    }, {
      displayname: 'Jone Doe Doo Doo',
      profileImage: './assets/imgs/chat-list-a/profile4.jpeg',
      lastmessage: 'Today I have a beautiful picture.',
      created: new Date().setDate(new Date().getDate() - 11),
      status: 'offline'

    }, {
      displayname: 'Jone Doe',
      profileImage: './assets/imgs/chat-list-a/profile.jpg',
      lastmessage: 'This town ain`t big enough for the two of us!',
      created: new Date().setDate(new Date().getDate() - 18),
      status: 'offline'
    }];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileListAPage');
  }

  search() {
    let toast = this.toastCtrl.create({
      message: 'Search with "' + this.searchText + '".',
      duration: 1000
    });
    toast.present();
  }

  onChat(item) {
    let toast = this.toastCtrl.create({
      message: 'Chat with "' + item.displayname + '".',
      duration: 1000
    });
    toast.present();
  }
}
