import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreateNoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-notice',
  templateUrl: 'create-notice.html',
})
export class CreateNoticePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  showSelectValue = function(mySelect) {
    console.log(mySelect);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateNoticePage');
  }

}
