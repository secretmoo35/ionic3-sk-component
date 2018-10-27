import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlideTabPage } from './slide-tab';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SlideTabPage,
  ],
  imports: [
    IonicPageModule.forChild(SlideTabPage),
    ComponentsModule
  ],
})
export class SlideTabPageModule {}
