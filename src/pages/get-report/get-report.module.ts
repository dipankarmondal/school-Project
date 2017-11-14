import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetReportPage } from './get-report';

@NgModule({
  declarations: [
    GetReportPage,
  ],
  imports: [
    IonicPageModule.forChild(GetReportPage),
  ],
})
export class GetReportPageModule {}
