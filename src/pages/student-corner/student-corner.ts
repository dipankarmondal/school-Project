import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
//import { AndroidFullScreen } from '@ionic-native/android-full-screen';

import { Storage } from '@ionic/storage';
import { UserProvider } from '../../providers/user/user';

import { Chart } from 'chart.js';


@IonicPage()
@Component({
  selector: 'page-student-corner',
  templateUrl: 'student-corner.html',
})
export class StudentCornerPage {
  user: any;
  student: any;
  todaysAttendance: any;
  doughnutChart: any;
  p: number;
  a: number;
//private androidFullScreen: AndroidFullScreen
  @ViewChild('doughnutCanvas') doughnutCanvas;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public userProvider: UserProvider,
    public menuCntlr: MenuController,
    ) {

/*       this.androidFullScreen.isImmersiveModeSupported()
      .then(() => this.androidFullScreen.immersiveMode())
      .catch((error: any) => console.log(error));
 */
    this.loadStudentPrcnt();

    this.storage.get('token').then((value) => {
      console.log('Token : ' + JSON.parse(value));
      console.log('Name : ' + JSON.parse(value).Name);
      this.user = JSON.parse(value);

    })
    this.menuCntlr.swipeEnable(true);
  }

  loadStudentPrcnt() {
    this.storage.get('token').then((value) => {
      console.log('token2: ' + JSON.parse(value).AuthToken);

      this.userProvider.stdntAttendChart(JSON.parse(value).AuthToken).then(data => {
        console.log('data: ' + data)
        this.student = data;
        this.p = this.student.PresentPercentage.toFixed(2);
        this.a = this.student.AbsentPercentage.toFixed(2);

        this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

          type: 'doughnut',
          data: {
            labels: ["Absent", "Present"],
            datasets: [{
              data: [this.a, this.p],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(50, 219, 100, 0.2)'
              ],
              hoverBackgroundColor: [
                "#FF6384",
                "#32DB64", ,
              ]
            }]
          }

        });
      });
    });
  }


  loadTodaysAttendance() {
    this.storage.get('token').then((value) => {
      console.log('token: ' + JSON.parse(value).AuthToken);
      this.userProvider.getTodaysAttendance(JSON.parse(value).AuthToken).then(data => {
        console.log('data: ' + data)
        this.todaysAttendance = data;
      });
    });
  }


  performanceList() {
    this.navCtrl.push('SubjectWisePerformancePage')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentCornerPage');

  }

}
