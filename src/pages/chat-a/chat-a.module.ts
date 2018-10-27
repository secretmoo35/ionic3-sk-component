import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatAPage } from './chat-a';

@NgModule({
  declarations: [
    ChatAPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatAPage),
  ],
})
export class ChatAPageModule {}
