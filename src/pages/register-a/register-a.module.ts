import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterAPage } from './register-a';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    RegisterAPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterAPage),
    ComponentsModule
  ],
})
export class RegisterAPageModule { }
