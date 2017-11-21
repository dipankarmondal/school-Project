import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';


import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { CalenderPage } from '../pages/calender/calender';
import { GetReportPage } from '../pages/get-report/get-report';
import { Icon } from 'ionic-angular/components/icon/icon';

import { UserProvider } from '../providers/user/user';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any , icon: any}>;

  user: any;
  notice: any;
  constructor(public platform: Platform,
     public statusBar: StatusBar, 
     public splashScreen: SplashScreen,
     public alertCtrl: AlertController,
     public storage: Storage,
     public userProvider: UserProvider) {
    this.initializeApp();

    this.storage.get('token').then((value) => {
      console.log('Token : ' + JSON.parse(value));
      console.log('Name : ' + JSON.parse(value).Name);
      this.user = JSON.parse(value);

    })

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon:'home' },
      { title: 'List', component: ListPage, icon:'home'  },
      { title: 'Calender', component: CalenderPage, icon:'home' },
      { title: 'Get Report', component: GetReportPage, icon:'home'}
    ];

    this.getNotice();

  }

  getNotice(){
    console.log('subject clicked');
    this.storage.get('token').then((value) => {
      console.log('subtoken: ' + JSON.parse(value).AuthToken);
      this.userProvider.getNotice(JSON.parse(value).AuthToken).then(data => {
        console.log('list2: ' + data)
        this.notice = data;
      });
    });
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logOut() { 
    let alert = this.alertCtrl.create({
      title: 'Confirm Log Out',
      message: 'Are you sure you want to log out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Log Out',
          handler: () => {
            console.log('Logged out');
            this.storage.get('userStorage').then((data) => {
                this.storage.clear();
                //this.menuCntlr.swipeEnable(false).close();
                this.nav.push("LoginPage");
            });
            
          }
        }
      ]
    });
    alert.present();
  }
}
