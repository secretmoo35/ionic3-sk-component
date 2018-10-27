import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HotelListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotel-list',
  templateUrl: 'hotel-list.html',
})
export class HotelListPage {
  hotels: { _id: string; name: string; address: string; image: string; prices: { name: string; price: number; }[]; isBed: boolean; isFood: boolean; isTravel: boolean; rate: number; }[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hotels = [{
      _id: '1',
      name: 'Good Hotel',
      address: '81/1-3 Market Square, South Paris, Maine 04881 (201) 723-3508',
      image: './assets/imgs/hotel-list/1.jpg',
      prices: [{
        name: 'Normal',
        price: 300
      }, {
        name: 'Cost of Food',
        price: 350
      }],
      isBed: true,
      isFood: true,
      isTravel: true,
      rate: 5
    }, {
      _id: '2',
      name: 'Good Hotel',
      address: '81/1-3 Market Square, South Paris, Maine 04881 (201) 723-3508',
      image: './assets/imgs/hotel-list/2.jpg',
      prices: [{
        name: 'Normal',
        price: 300
      }, {
        name: 'Cost of Food',
        price: 350
      }],
      isBed: true,
      isFood: true,
      isTravel: true,
      rate: 4
    }, {
      _id: '3',
      name: 'Good Hotel',
      address: '81/1-3 Market Square, South Paris, Maine 04881 (201) 723-3508',
      image: './assets/imgs/hotel-list/3.jpg',
      prices: [{
        name: 'Normal',
        price: 300
      }],
      isBed: true,
      isFood: true,
      isTravel: false,
      rate: 3.5
    }, {
      _id: '4',
      name: 'Good Hotel',
      address: '81/1-3 Market Square, South Paris, Maine 04881 (201) 723-3508',
      image: './assets/imgs/hotel-list/4.jpg',
      prices: [{
        name: 'Normal',
        price: 300
      }, {
        name: 'Cost of Food',
        price: 350
      }, {
        name: 'Food and Travel',
        price: 400
      }, {
        name: 'Premium',
        price: 500
      }],
      isBed: true,
      isFood: true,
      isTravel: true,
      rate: 4.5
    }, {
      _id: '5',
      name: 'Good Food',
      address: '81/1-3 Market Square, South Paris, Maine 04881 (201) 723-3508',
      image: './assets/imgs/hotel-list/5.jpg',
      prices: [{
        name: 'Food',
        price: 100
      }],
      isBed: false,
      isFood: true,
      isTravel: false,
      rate: 3
    }]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelListPage');
  }

}
