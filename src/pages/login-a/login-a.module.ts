import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginAPage } from './login-a';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LoginAPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginAPage),
    ComponentsModule
  ],
})
export class LoginAPageModule {}
