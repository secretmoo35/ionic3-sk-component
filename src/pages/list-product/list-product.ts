import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ListProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-product',
  templateUrl: 'list-product.html',
})
export class ListProductPage {
  products: Array<any> = [];
  searchText: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController
  ) {
    this.products = [{
      _id: '1',
      image: './assets/imgs/grid-product-x/p1.jpg',
      name: 'T-Shirt (White)',
      price: 10,
      rate: 5,
      status: 'Sale'
    }, {
      _id: '2',
      image: './assets/imgs/grid-product-x/p1.jpg',
      name: 'T-Shirt (White)',
      price: 19,
      rate: 4,
      status: 'Promotion'
    }, {
      _id: '3',
      image: './assets/imgs/grid-product-x/p1.jpg',
      name: 'T-Shirt (White)',
      price: 22,
      rate: 3,
      status: 'Hot'
    }, {
      _id: '4',
      image: './assets/imgs/grid-product-x/p1.jpg',
      name: 'T-Shirt (White)',
      price: 17,
      rate: 3,
      status: ''
    }, {
      _id: '5',
      image: './assets/imgs/grid-product-x/p1.jpg',
      name: 'T-Shirt (White)',
      price: 25,
      rate: 4.5,
      status: ''
    }, {
      _id: '6',
      image: './assets/imgs/grid-product-x/p1.jpg',
      name: 'T-Shirt (White)',
      price: 30,
      rate: 3,
      status: ''
    }, {
      _id: '7',
      image: './assets/imgs/grid-product-x/p1.jpg',
      name: 'T-Shirt (White)',
      price: 11,
      rate: 5,
      status: ''
    }, {
      _id: '8',
      image: './assets/imgs/grid-product-x/p1.jpg',
      name: 'T-Shirt (White)',
      price: 22,
      rate: 4.5,
      status: ''
    }];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListProductPage');
  }

  search() {
    let toast = this.toastCtrl.create({
      message: 'Search with "' + this.searchText + '".',
      duration: 1000
    });
    toast.present();
  }

  doViewDetail(event) {
    console.log(event);
  }

}
