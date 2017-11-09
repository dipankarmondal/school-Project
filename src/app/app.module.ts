import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPageModule } from '../pages/login/login.module';
import { ForgotPasswordPageModule } from '../pages/forgot-password/forgot-password.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { StudentCornerPageModule } from '../pages/student-corner/student-corner.module';
import { SubjectWisePerformancePageModule } from '../pages/subject-wise-performance/subject-wise-performance.module';
import { CalenderPageModule } from '../pages/calender/calender.module';

import { UserProvider } from '../providers/user/user';
import { NgCalendarModule  } from 'ionic2-calendar';
import { CalendarModule } from '../components/ion2-calendar'



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    LoginPageModule,
    StudentCornerPageModule,
    RegisterPageModule,
    CalenderPageModule,
    ForgotPasswordPageModule,
    SubjectWisePerformancePageModule,
    HttpModule,
    NgCalendarModule,
    CalendarModule,
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}
