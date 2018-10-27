import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NumpadAPage } from './numpad-a';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    NumpadAPage,
  ],
  imports: [
    IonicPageModule.forChild(NumpadAPage),
    ComponentsModule
  ],
})
export class NumpadAPageModule {}
