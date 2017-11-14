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
  selector: 'page-calender',
  templateUrl: 'calender.html',
})
export class CalenderPage {

  days: Array<any> = [];
  date: any = moment(moment().format('YYYY-MM-DD')).add(1, 'month');
  dateMulti = [];
  optionsBasic: CalendarComponentOptions = { };
  dateRangeObj = { from: moment().format('YYYY-MM-DD'), to: moment().add('', 'd').format('YYYY-MM-DD') };
  format = 'YYYY-MM-DD';

  optionsRange: CalendarComponentOptions = {
    from: new Date(2000, 0),
    to: new Date(2020, 11, 31),
    pickMode: 'range',
    weekStart: 1,
    weekdays: ['0', '1', '2', '3', '4', '5', '6'],
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

  basic() {
    const options = {
      title: 'BASIC',
      canBackwardsSelected: true,
      color: 'cal-color',
      doneIcon: true,
      closeIcon: true
    };
    let myCalendar =  this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();

    myCalendar.onDidDismiss((date, type) => {
      console.log(date);
      console.log(type);
    })
  }

  multi() {
    const options = {
      pickMode: 'multi',
      title: 'MULTI',
      defaultDates: [moment(), moment().add(1, 'd'), moment().add(2, 'd')]
    };

    let myCalendar =  this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();

    myCalendar.onDidDismiss(date => {
      console.log(date);
    })
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

  setDefaultDate() {
    const options: CalendarModalOptions = {
      from: new Date(2017, 1, 1),
      defaultScrollTo: new Date(2017, 4, 1),
      defaultDate:  new Date(2017, 4, 1)
    };

    let myCalendar =  this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();

    myCalendar.onDidDismiss(date => {
      console.log(date);
    });

  }

  setCssClass() {
    const options: CalendarModalOptions = {
      cssClass: 'my-class',
      pickMode: 'range',
      autoDone: true
    };

    let myCalendar =  this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();

    myCalendar.onDidDismiss(date => {
      console.log(date);
    });
  }

  optional() {
    const options: CalendarModalOptions = {
      from: new Date(2017, 1, 1),
      to: new Date(2017, 2, 5),
    };

    let myCalendar =  this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();

    myCalendar.onDidDismiss(date => {
      console.log(date);
    });
  }

  disableWeekdays() {
    const options: CalendarModalOptions = {
      disableWeeks: [0, 6],
      canBackwardsSelected: true,
    };

    let myCalendar =  this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();

    myCalendar.onDidDismiss(date => {
      console.log(date);
    });
  }

  local() {
    const options: CalendarModalOptions = {
      monthFormat: 'YYYY 年 MM 月',
      weekdays: ['天', '一', '二', '三', '四', '五', '六'],
      weekStart: 1,
      color: 'light',
      defaultDate: new Date()
    };

    let myCalendar =  this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();

    myCalendar.onDidDismiss(date => {
      console.log(date);
    });
  }

  daysConfig() {
    let _daysConfig: DayConfig[] = [];
    for (let i = 0; i < 31; i++) {
      _daysConfig.push({
        date: new Date(2017, 0, i + 1),
        subTitle: `$${i + 1}`
      })
    }
    _daysConfig.push({
      date: new Date(2017, 1, 1),
      disable: true,
      subTitle: 'disable',
    });
    _daysConfig.push({
      date: new Date(2017, 1, 2),
      subTitle: 'cssClass',
      cssClass: 'my-day'
    });
    const options: CalendarModalOptions = {
      from: new Date(2017, 0, 1),
      to: new Date(2017, 11.1),
      daysConfig: _daysConfig,
      cssClass: 'my-cal',
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
    console.log('ionViewDidLoad CalenderPage');
  }

}
