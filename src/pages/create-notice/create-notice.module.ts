import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateNoticePage } from './create-notice';

@NgModule({
  declarations: [
    CreateNoticePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateNoticePage),
  ],
})
export class CreateNoticePageModule {}
