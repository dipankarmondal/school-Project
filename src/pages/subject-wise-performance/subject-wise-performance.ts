import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserProvider } from '../../providers/user/user';
import { Chart } from 'chart.js';

/**
 * Generated class for the SubjectWisePerformancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subject-wise-performance',
  templateUrl: 'subject-wise-performance.html',
})
export class SubjectWisePerformancePage {

  aggregateList: any;
  user: any;
  p: number;
  a: number;
  doughnutChart: any;

  @ViewChild('doughnutCanvas') doughnutCanvas;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public userProvider: UserProvider, ) {

      this.loadAggregateList();

    this.storage.get('token').then((value) => {
      console.log('Token : ' + JSON.parse(value));
      this.user = JSON.parse(value);

    })
  }

  loadAggregateList() {
    this.storage.get('token').then((value) => {
      console.log('token: ' + JSON.parse(value).AuthToken);
      this.userProvider.getClassAggregateList(JSON.parse(value).AuthToken).then(data => {
        console.log('data: ' + data)
        this.aggregateList = data;

         /* this.p = this.aggregateList.Present;
        this.a = this.aggregateList.Absent;
        console.log('attend: ' + this.p);

        this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

          type: 'doughnut',
          data: {
            labels: ["Absent", "Present"],
            datasets: [{
              data: [this.a, this.p],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
              ],
              
              hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB", ,
              ]
            }]
          }

        });  */

      });
    });
  }

  showCalender(){
    this.navCtrl.push('CalenderPage');
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad SubjectWisePerformancePage');
  }

}
