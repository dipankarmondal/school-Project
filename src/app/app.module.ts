import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CalenderPage } from '../pages/calender/calender';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';
import { ForgotPasswordPageModule } from '../pages/forgot-password/forgot-password.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { StudentCornerPageModule } from '../pages/student-corner/student-corner.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CalenderPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    StudentCornerPageModule,
    RegisterPageModule,
    ForgotPasswordPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CalenderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
