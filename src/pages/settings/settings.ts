import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  inputIP: any;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public storage: Storage,) {
      this.storage.get('IP').then((value) =>{
        console.log('your IP' + value);
      })
  }

  getIP(){
    console.log(this.inputIP);
    this.storage.set('IP', this.inputIP.toString());
    this.navCtrl.push('LoginPage');
   // console.log('your Ip: '+ JSON.stringify(this.inputIP));
   // this.getIP
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
