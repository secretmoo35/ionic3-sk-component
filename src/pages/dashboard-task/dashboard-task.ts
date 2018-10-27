import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DashboardTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard-task',
  templateUrl: 'dashboard-task.html',
})
export class DashboardTaskPage {
  tab: string = ''
  tasks: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tasks = [{
      _id: '1',
      title: 'Create Project',
      remark: '',
      status: 'success',
      date: 'Wed Jun 20 2018 16:30:17 GMT+0700'
    }, {
      _id: '2',
      title: 'Config App: Video Call',
      remark: '',
      status: 'success',
      date: 'Thu Jun 21 2018 20:55:36 GMT+0700'
    }, {
      _id: '3',
      title: 'Config App: Chat',
      remark: 'Network crashed waiting for new set up. ',
      status: 'fail',
      date: 'Fri Jun 22 2018 10:30:00 GMT+0700'
    }, {
      _id: '4',
      title: 'Login & Register',
      remark: '',
      status: 'success',
      date: 'Sun Jun 24 2018 16:30:17 GMT+0700'
    }, {
      _id: '5',
      title: 'Deploy to Google Play.',
      remark: '',
      status: 'wait',
      date: new Date()
    }, {
      _id: '6',
      title: 'Deploy to App Store.',
      remark: '',
      status: 'wait',
      date: new Date().setHours(new Date().getHours() + 1)
    }]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardTaskPage');
  }

  tabSelected(status) {
    this.tab = status;
  }

  itemSelected(item) {
    console.log(item);
  }

}
