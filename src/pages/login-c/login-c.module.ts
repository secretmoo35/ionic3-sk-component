import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginCPage } from './login-c';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LoginCPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginCPage),
    ComponentsModule
  ],
})
export class LoginCPageModule {}
