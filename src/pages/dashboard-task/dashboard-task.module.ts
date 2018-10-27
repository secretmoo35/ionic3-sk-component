import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardTaskPage } from './dashboard-task';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    DashboardTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardTaskPage),
    ComponentsModule,
    PipesModule
  ],
})
export class DashboardTaskPageModule {}
