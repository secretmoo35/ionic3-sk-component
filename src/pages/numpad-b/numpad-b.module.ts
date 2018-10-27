import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NumpadBPage } from './numpad-b';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    NumpadBPage,
  ],
  imports: [
    IonicPageModule.forChild(NumpadBPage),
    ComponentsModule
  ],
})
export class NumpadBPageModule {}
