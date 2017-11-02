import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentCornerPage } from './student-corner';

@NgModule({
  declarations: [
    StudentCornerPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentCornerPage),
  ],
})
export class StudentCornerPageModule {}
