import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-present',
  templateUrl: 'present.html',
})
export class PresentPage {

  item: any;
  user: any;
  attendenceList: any;
  subject: any;
  filteredData: any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public storage: Storage,
     public userProvider: UserProvider,
     ) {
      this.storage.get('token').then((value) => {
        console.log('Token : ' + JSON.parse(value));
        console.log('Name : ' + JSON.parse(value).Name);
        this.user = JSON.parse(value);
      })
  
      this.subject = navParams.get('item');
  
      this.subjectAttendence();

  }
  subjectAttendence() {
    console.log('subject clicked');
    this.storage.get('token').then((value) => {
      console.log('subtoken: ' + JSON.parse(value).AuthToken);
      this.userProvider.subjectBasedAttnd(JSON.parse(value).AuthToken, this.subject.SubjectID).then(data => {
        console.log('list: ' + data)
        this.attendenceList = data;
        this.filteredData= this.attendenceList.filter(item=> item.Remarks==='P')
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentPage');
  }

}
