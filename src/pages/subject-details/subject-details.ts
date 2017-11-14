import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Storage } from '@ionic/storage';
import { Subject } from 'rxjs/Subject';

@IonicPage()
@Component({
  selector: 'page-subject-details',
  templateUrl: 'subject-details.html',
})
export class SubjectDetailsPage {

  subject: any;
  attendenceList: any;
  user: any;
  item: any
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public userProvider: UserProvider, ) {

      this.storage.get('token').then((value) => {
        console.log('Token : ' + JSON.parse(value));
        console.log('Name : ' + JSON.parse(value).Name);
        this.user = JSON.parse(value);
  
      })

    this.subject = navParams.get('item');
    
    console.log('sub:'+this.subject);
    this.subjectAttendence();
    
  }

  subjectAttentList(){
    return this.attendenceList;
  }


  subjectAttendence() {
    console.log('subject clicked');
    this.storage.get('token').then((value) => {
      console.log('subtoken: ' + JSON.parse(value).AuthToken);
      this.userProvider.subjectBasedAttnd(JSON.parse(value).AuthToken, this.subject.SubjectID).then(data => {
        console.log('list: ' + data)
        this.attendenceList = data;
      });
    });
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad SubjectDetailsPage');
  }

}
