import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TStudentAttendencePage } from './t-student-attendence';

@NgModule({
  declarations: [
    TStudentAttendencePage,
  ],
  imports: [
    IonicPageModule.forChild(TStudentAttendencePage),
  ],
})
export class TStudentAttendencePageModule {}
