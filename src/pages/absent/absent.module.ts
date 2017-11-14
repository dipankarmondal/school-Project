import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbsentPage } from './absent';

@NgModule({
  declarations: [
    AbsentPage,
  ],
  imports: [
    IonicPageModule.forChild(AbsentPage),
  ],
})
export class AbsentPageModule {}
