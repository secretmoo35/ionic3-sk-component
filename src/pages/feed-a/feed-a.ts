import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the FeedAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed-a',
  templateUrl: 'feed-a.html',
})
export class FeedAPage {
  @ViewChild('myPost') myPost: ElementRef;
  posts: Array<any> = [];
  searchText: string;
  postText: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController
  ) {
    this.posts = [{
      owner: {
        displayname: 'Goat Doe',
        profileImage: './assets/imgs/feed-a/profile2.png'
      },
      images: ['./assets/imgs/feed-a/posts/1.jpeg', './assets/imgs/feed-a/posts/2.jpg'],
      content: 'I love nature always Is beautiful. as long as we keep it together, it will stay with us forever.',
      created: new Date(),
      likes: 5621,
      comments: 2839,
      islike: true
    }, {
      owner: {
        displayname: 'Jone Doe',
        profileImage: './assets/imgs/feed-a/profile3.png'
      },
      images: ['./assets/imgs/feed-a/posts/3.jpg'],
      content: 'WOW! INature is always amazing.',
      created: new Date().setDate(new Date().getDate() - 10),
      likes: 845,
      comments: 192,
      islike: false
    }, {
      owner: {
        displayname: 'Jone Doe Doo Doo',
        profileImage: './assets/imgs/feed-a/profile4.jpeg'
      },
      images: ['./assets/imgs/feed-a/posts/1.jpeg', './assets/imgs/feed-a/posts/2.jpg', './assets/imgs/feed-a/posts/3.jpg', './assets/imgs/feed-a/posts/1.jpeg'],
      content: 'Today I have a beautiful picture.',
      created: new Date().setDate(new Date().getDate() - 11),
      likes: 19283,
      comments: 5069,
      islike: true
    }, {
      owner: {
        displayname: 'Min An',
        profileImage: './assets/imgs/feed-a/profile5.jpeg'
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
        profileImage: './assets/imgs/feed-a/profile.jpg'
      },
      images: ['./assets/imgs/feed-a/posts/2.jpg', './assets/imgs/feed-a/posts/1.jpeg', './assets/imgs/feed-a/posts/3.jpg', './assets/imgs/feed-a/posts/1.jpeg', './assets/imgs/feed-a/posts/1.jpeg', './assets/imgs/feed-a/posts/2.jpg', './assets/imgs/feed-a/posts/3.jpg', './assets/imgs/feed-a/posts/1.jpeg'],
      content: '',
      created: new Date().setDate(new Date().getDate() - 18),
      likes: 1254,
      comments: 132,
      islike: false
    }];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedAPage');
  }

  search() {
    let toast = this.toastCtrl.create({
      message: 'Search with "' + this.searchText + '".',
      duration: 1000
    });
    toast.present();
  }

  resize() {
    setTimeout(() => {
      this.myPost.nativeElement.style.height = '0px';
      this.myPost.nativeElement.style.height = this.myPost.nativeElement.scrollHeight + 'px';
    }, 0);
  }

  openCamera() {
    let toast = this.toastCtrl.create({
      message: 'Open Camera.',
      duration: 1000
    });
    toast.present();
  }

  openPhoto() {
    let toast = this.toastCtrl.create({
      message: 'Open Photo Library.',
      duration: 1000
    });
    toast.present();
  }

  openIcon() {
    let toast = this.toastCtrl.create({
      message: 'Open Feeling.',
      duration: 1000
    });
    toast.present();
  }

  openLocation() {
    let toast = this.toastCtrl.create({
      message: 'Open Location.',
      duration: 1000
    });
    toast.present();
  }

  onPost() {
    let toast = this.toastCtrl.create({
      message: 'Posted.',
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
