import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  products: Array<any> = [];
  productDetail: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.productDetail = {
      _id: '1',
      image: './assets/imgs/grid-product-x/p1.jpg',
      name: 'T-Shirt (White)',
      detail: 'White shirt is made with 100% cotton.',
      price: 10,
      rate: 5,
      status: 'Sale'
    };

    this.productDetail.qty = 1;

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
    }];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }

  reduce() {
    if (this.productDetail.qty > 1) this.productDetail.qty--;
  }

  increase() {
    this.productDetail.qty++;
  }

  doViewDetail(event) {
    console.log(event);
  }

}
