import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterCPage } from './register-c';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    RegisterCPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterCPage),
    ComponentsModule
  ],
})
export class RegisterCPageModule {}
