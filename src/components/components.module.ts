import { NgModule } from '@angular/core';
import { SkLoginAComponent } from './sk-login-a/sk-login-a';
import { IonicModule } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';

import { SkLoginBComponent } from './sk-login-b/sk-login-b';
import { SkLoginCComponent } from './sk-login-c/sk-login-c';
import { SkRegisterAComponent } from './sk-register-a/sk-register-a';
import { SkRegisterBComponent } from './sk-register-b/sk-register-b';
import { SkRegisterCComponent } from './sk-register-c/sk-register-c';
import { SkListPostAComponent } from './sk-list-post-a/sk-list-post-a';
import { SkPreloadImageComponent } from './sk-preload-image/sk-preload-image';
import { SkNumpadAComponent } from './sk-numpad-a/sk-numpad-a';
import { SkNumpadBComponent } from './sk-numpad-b/sk-numpad-b';
import { SkDateRealtimeComponent } from './sk-date-realtime/sk-date-realtime';
import { SkGridProductXComponent } from './sk-grid-product-x/sk-grid-product-x';
import { SkGridProductYComponent } from './sk-grid-product-y/sk-grid-product-y';
import { SkListProductComponent } from './sk-list-product/sk-list-product';
@NgModule({
  declarations: [
    SkLoginAComponent,
    SkLoginBComponent,
    SkLoginCComponent,
    SkRegisterAComponent,
    SkRegisterBComponent,
    SkRegisterCComponent,
    SkListPostAComponent,
    SkPreloadImageComponent,
    SkNumpadAComponent,
    SkNumpadBComponent,
    SkDateRealtimeComponent,
    SkGridProductXComponent,
    SkGridProductYComponent,
    SkListProductComponent,
  ],
  imports: [IonicModule, Ionic2RatingModule],
  exports: [
    SkLoginAComponent,
    SkLoginBComponent,
    SkLoginCComponent,
    SkRegisterAComponent,
    SkRegisterBComponent,
    SkRegisterCComponent,
    SkListPostAComponent,
    SkPreloadImageComponent,
    SkNumpadAComponent,
    SkNumpadBComponent,
    SkDateRealtimeComponent,
    SkGridProductXComponent,
    SkGridProductYComponent,
    SkListProductComponent,
  ]
})
export class ComponentsModule { }
