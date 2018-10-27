import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelListPage } from './hotel-list';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    HotelListPage,
  ],
  imports: [
    IonicPageModule.forChild(HotelListPage),
    Ionic2RatingModule
  ],
})
export class HotelListPageModule {}
