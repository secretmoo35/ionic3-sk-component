import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginBPage } from './login-b';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LoginBPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginBPage),
    ComponentsModule
  ],
})
export class LoginBPageModule {}
