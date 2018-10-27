import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedAPage } from './feed-a';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    FeedAPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedAPage),
    ComponentsModule
  ],
})
export class FeedAPageModule {}
