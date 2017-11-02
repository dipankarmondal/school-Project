import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  login(){
    this.navCtrl.push('LoginPage');
  }
}
