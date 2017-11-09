import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalenderPage } from './calender';
import { CalendarModule } from '../../components/ion2-calendar'

@NgModule({
  declarations: [
    CalenderPage,
  ],
  imports: [
    IonicPageModule.forChild(CalenderPage),
  ],
})
export class CalenderPageModule {}
