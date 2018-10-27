import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the ChatAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-a',
  templateUrl: 'chat-a.html',
})
export class ChatAPage {
  @ViewChild(Content) content: Content;
  @ViewChild('myChat') myChat: ElementRef;
  messages: Array<any> = [];
  chatText: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.messages = [{
      content: 'Nice to meet you. What is your name?',
      image: './assets/imgs/chat-a/profile.jpg',
      position: 'right',
      time: new Date().setDate(new Date().getDate() - 0.5),
      sendername: 'Jone Doe'
    }, {
      content: 'Am I Mr.Jone Doe?',
      image: './assets/imgs/chat-a/profile3.png',
      position: 'left',
      time: new Date().setDate(new Date().getDate() - 0.5),
      sendername: 'Mr.Jone Doe'
    }];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatAPage');
  }

  resize() {
    setTimeout(() => {
      this.myChat.nativeElement.style.height = '0px';
      this.myChat.nativeElement.style.height = this.myChat.nativeElement.scrollHeight + 'px';
    }, 0);
  }

  sendText() {
    this.myChat.nativeElement.focus();
    this.messages.push({
      content: this.chatText,
      image: './assets/imgs/chat-a/profile.jpg',
      position: 'right',
      time: new Date().setDate(new Date().getDate() - 0.5),
      sendername: 'Jone Doe'
    });
    var text = this.chatText;
    this.chatText = '';
    setTimeout(() => {
      this.content.scrollToBottom();
      this.resize();
    }, 0);
    // Mockup
    setTimeout(() => {
      this.messages.push({
        content: text,
        image: './assets/imgs/chat-a/profile3.png',
        position: 'left',
        time: new Date().setDate(new Date().getDate() - 0.5),
        sendername: 'Mr.Jone Doe'
      });
      setTimeout(() => {
        this.content.scrollToBottom();
      }, 0);
    }, 1500);
  }
}
