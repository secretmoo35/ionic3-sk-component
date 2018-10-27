import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterBPage } from './register-b';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    RegisterBPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterBPage),
    ComponentsModule
  ],
})
export class RegisterBPageModule {}
