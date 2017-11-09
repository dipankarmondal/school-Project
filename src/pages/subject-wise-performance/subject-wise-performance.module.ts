import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubjectWisePerformancePage } from './subject-wise-performance';

@NgModule({
  declarations: [
    SubjectWisePerformancePage,
  ],
  imports: [
    IonicPageModule.forChild(SubjectWisePerformancePage),
  ],
})
export class SubjectWisePerformancePageModule {}
