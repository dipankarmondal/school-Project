import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,
    public storage: Storage,
    ) {

  }

/*   loadLocation() {
    this.storage.get('token').then((value) => {

      console.log('Token : ' + JSON.parse(value).AuthToken);
      this.userProvider.studentInfo(JSON.parse(value).AuthToken).then(data => {
        console.log('data= ' + data)
      });
    });
  } */

  login() {
    this.navCtrl.push('LoginPage');
  }
}
