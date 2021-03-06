import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CalenderPage} from '../pages/calender/calender';
import { GetReportPage } from '../pages/get-report/get-report';
import { CreateNoticePage } from '../pages/create-notice/create-notice';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPageModule } from '../pages/login/login.module';
import { SettingsPageModule } from '../pages/settings/settings.module';

import { StudentCornerPageModule } from '../pages/student-corner/student-corner.module';
import { SubjectWisePerformancePageModule } from '../pages/subject-wise-performance/subject-wise-performance.module';
import { SubjectDetailsPageModule } from '../pages/subject-details/subject-details.module';
import { AbsentPageModule } from '../pages/absent/absent.module';
import { PresentPageModule } from '../pages/present/present.module';

import {  TClassAggregateListPageModule } from '../pages/t-class-aggregate-list/t-class-aggregate-list.module';
import { TStudentAttendencePageModule } from '../pages/t-student-attendence/t-student-attendence.module';
import { TSubjectWisePerformancePageModule } from '../pages/t-subject-wise-performance/t-subject-wise-performance.module';
import { TStudentAttendenceListPageModule } from '../pages/t-student-attendence-list/t-student-attendence-list.module';
import { TGetSubjectWiseStudentAttendanceListPageModule } from '../pages/t-get-subject-wise-student-attendance-list/t-get-subject-wise-student-attendance-list.module';
import { TSubjectDateAbsentPageModule } from '../pages/t-subject-date-absent/t-subject-date-absent.module';
import { TSubjectDatePresentPageModule } from '../pages/t-subject-date-present/t-subject-date-present.module';

import { UserProvider } from '../providers/user/user';
import { NgCalendarModule  } from 'ionic2-calendar';
//import { CalendarModule } from '../components/ion2-calendar'
import { CalendarModule } from "ion2-calendar";
import { UserTeacherProvider } from '../providers/user-teacher/user-teacher';
import { TSubjectDatePresentPage } from '../pages/t-subject-date-present/t-subject-date-present';
import { TSubjectDateAbsentPage } from '../pages/t-subject-date-absent/t-subject-date-absent';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CalenderPage,
    GetReportPage,
    CreateNoticePage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),

    SettingsPageModule,
    LoginPageModule,
    StudentCornerPageModule,
    SubjectWisePerformancePageModule,
    SubjectDetailsPageModule,
    AbsentPageModule,
    PresentPageModule,

    TStudentAttendencePageModule,
    TClassAggregateListPageModule,
    TSubjectWisePerformancePageModule,
    TStudentAttendenceListPageModule,
    TGetSubjectWiseStudentAttendanceListPageModule,
    TSubjectDatePresentPageModule,
    TSubjectDateAbsentPageModule,
    
    HttpModule,
    NgCalendarModule,
    CalendarModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CalenderPage,
    GetReportPage,
    CreateNoticePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    UserTeacherProvider
  ]
})
export class AppModule {}
