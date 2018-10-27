import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileBPage } from './profile-b';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProfileBPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileBPage),
    ComponentsModule
  ],
})
export class ProfileBPageModule { }
