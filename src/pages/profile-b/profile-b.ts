import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ProfileBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-b',
  templateUrl: 'profile-b.html',
})
export class ProfileBPage {
  profile: any;
  posts: Array<any> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController
  ) {
    this.profile = {
      profileImage: './assets/imgs/profile-b/profile-b.jpg',
      firstname: 'Jone',
      lastname: 'Doe',
      email: 'jane.doe@gmail.com',
      phonenumber: '+12015550123',
      post: 254,
      followers: 8901,
      following: 423
    }
    this.posts = [{
      owner: {
        displayname: 'Jone Doe',
        profileImage: './assets/imgs/profile-b/profile-b.jpg'
      },
      images: ['./assets/imgs/profile-b/posts/1.jpeg', './assets/imgs/profile-b/posts/2.jpg'],
      content: 'I love nature always Is beautiful. as long as we keep it together, it will stay with us forever.',
      created: new Date(),
      likes: 5621,
      comments: 2839,
      islike: true
    }, {
      owner: {
        displayname: 'Jone Doe',
        profileImage: './assets/imgs/profile-b/profile-b.jpg'
      },
      images: ['./assets/imgs/profile-b/posts/3.jpg'],
      content: 'WOW! INature is always amazing.',
      created: new Date().setDate(new Date().getDate() - 10),
      likes: 845,
      comments: 192,
      islike: false
    }, {
      owner: {
        displayname: 'Jone Doe',
        profileImage: './assets/imgs/profile-b/profile-b.jpg'
      },
      images: ['./assets/imgs/profile-b/posts/1.jpeg', './assets/imgs/profile-b/posts/2.jpg', './assets/imgs/profile-b/posts/3.jpg', './assets/imgs/profile-b/posts/1.jpeg'],
      content: 'Today I have a beautiful picture.',
      created: new Date().setDate(new Date().getDate() - 11),
      likes: 19283,
      comments: 5069,
      islike: true
    }, {
      owner: {
        displayname: 'Jone Doe',
        profileImage: './assets/imgs/profile-b/profile-b.jpg'
      },
      images: [],
      content: 'HAHA :) :=) ^^ ^_^ <3',
      created: new Date().setDate(new Date().getDate() - 15),
      likes: 35,
      comments: 23,
      islike: false
    }, {
      owner: {
        displayname: 'Jone Doe',
        profileImage: './assets/imgs/profile-b/profile-b.jpg'
      },
      images: ['./assets/imgs/profile-b/posts/2.jpg', './assets/imgs/profile-b/posts/1.jpeg', './assets/imgs/profile-b/posts/3.jpg', './assets/imgs/profile-b/posts/1.jpeg', './assets/imgs/profile-b/posts/1.jpeg', './assets/imgs/profile-b/posts/2.jpg', './assets/imgs/profile-b/posts/3.jpg', './assets/imgs/profile-b/posts/1.jpeg'],
      content: '',
      created: new Date().setDate(new Date().getDate() - 18),
      likes: 1254,
      comments: 132,
      islike: false
    }];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileBPage');
  }

  onEdit() {
    let toast = this.toastCtrl.create({
      message: 'Edit.',
      duration: 1000
    });
    toast.present();
  }

  onViewImage() {
    let toast = this.toastCtrl.create({
      message: 'View Image.',
      duration: 1000
    });
    toast.present();
  }

  onLike() {
    let toast = this.toastCtrl.create({
      message: 'You Like!.',
      duration: 1000
    });
    toast.present();
  }

  onComment() {
    let toast = this.toastCtrl.create({
      message: 'Show Comment.',
      duration: 1000
    });
    toast.present();
  }
}
