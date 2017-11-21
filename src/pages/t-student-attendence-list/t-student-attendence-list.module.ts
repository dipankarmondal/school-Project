import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TStudentAttendenceListPage } from './t-student-attendence-list';

@NgModule({
  declarations: [
    TStudentAttendenceListPage,
  ],
  imports: [
    IonicPageModule.forChild(TStudentAttendenceListPage),
  ],
})
export class TStudentAttendenceListPageModule {}
