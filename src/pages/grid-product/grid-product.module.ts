import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GridProductPage } from './grid-product';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    GridProductPage,
  ],
  imports: [
    IonicPageModule.forChild(GridProductPage),
    ComponentsModule
  ],
})
export class GridProductPageModule { }
