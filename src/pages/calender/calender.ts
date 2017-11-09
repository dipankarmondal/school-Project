import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { CalendarController } from '../../components/ion2-calendar'

import {
  CalendarComponentOptions, CalendarModalOptions,
  DayConfig
} from '../../components/ion2-calendar/calendar.model';

import * as moment from 'moment';
import { CalendarModal } from "../../components/ion2-calendar";

@IonicPage()
@Component({
  selector: 'page-calender',
  templateUrl: 'calender.html',
})
export class CalenderPage {

  days: Array<any> = [];
  date: any = moment(moment().format('YYYY-MM-DD')).add(1, 'month');
  dateMulti = [];
  dateRangeObj = { from: moment().format('YYYY-MM-DD'), to: moment().add(3, 'd').format('YYYY-MM-DD') };
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
     public modalCtrl: ModalController,
     public calendarCtrl: CalendarController,) {
  }

  dateRange() {
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: 'RANGE',
      canBackwardsSelected: true,
      color: 'danger'
    };

    let myCalendar = this.modalCtrl.create(CalendarModal, {
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
