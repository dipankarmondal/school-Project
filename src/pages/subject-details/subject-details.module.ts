import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubjectDetailsPage } from './subject-details';

@NgModule({
  declarations: [
    SubjectDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SubjectDetailsPage),
  ],
})
export class SubjectDetailsPageModule {}
