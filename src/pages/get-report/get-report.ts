import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import {
  CalendarComponentOptions,
  CalendarModalOptions,
  CalendarModal,
  DayConfig
} from 'ion2-calendar'


import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-get-report',
  templateUrl: 'get-report.html',
})
export class GetReportPage {

  days: Array<any> = [];
  date: any = moment(moment().format('YYYY-MM-DD')).add(1, 'month');
  dateMulti = [];
  optionsBasic: CalendarComponentOptions = { };
  //dateRangeObj = { from: moment().format('YYYY-MM-DD'), to: moment().add('', 'd').format('YYYY-MM-DD') };
  format = 'YYYY-MM-DD';

  optionsRange: CalendarComponentOptions = {
    from: new Date(2000, 0),
    to: new Date(2020, 11, 31),
    pickMode: 'range',
    weekStart: 1,
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  };

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public modalCtrl: ModalController,) {


  }

  

  addM() {
    this.date = this.date.clone().add(5, 'days');
  }

  onChange($event) {
    console.log($event);
  }

  monthChange($event) {
    console.log($event);
    let date = moment($event.newMonth.string, 'YYYY-MM-DD');
    setTimeout(() => {
      const newPot = {
        daysConfig: [
          {
            date: date.toDate(),
            marked: true,
          },
          {
            date: date.clone().add(1, 'd').toDate(),
            marked: true,
          }
          ,
          {
            date: date.clone().add(2, 'd').toDate(),
            marked: true,
          }
        ]
      };

      this.optionsBasic = {
        ...this.optionsBasic,
        ...newPot
      };
    }, 300)
  }

  dateRange() {
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: 'RANGE',
      canBackwardsSelected: true,
      color: 'danger'
    };

    let myCalendar =  this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();

    myCalendar.onDidDismiss(date => {
      console.log(date);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetReportPage');
  }

}
