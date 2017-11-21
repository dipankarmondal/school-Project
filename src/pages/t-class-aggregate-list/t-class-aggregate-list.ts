import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { UserTeacherProvider } from '../../providers/user-teacher/user-teacher';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-t-class-aggregate-list',
  templateUrl: 't-class-aggregate-list.html',
})
export class TClassAggregateListPage {

  teacher: any;
  attendenceList: any;
  


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public teacherProvider: UserTeacherProvider, ) {
    this.storage.get('token').then((value) => {
      console.log('Token : ' + JSON.parse(value));
      console.log('Name : ' + JSON.parse(value).Name);
      this.teacher = JSON.parse(value);
    })

    this.classAgregateList();
   

  }

  classAgregateList() {
    console.log('subject clicked');
    this.storage.get('token').then((value) => {
      console.log('subtoken: ' + JSON.parse(value).AuthToken);
      this.teacherProvider.GetProfessorClassAggregateList(JSON.parse(value).AuthToken).then(data => {
        console.log('list: ' + data)
        this.attendenceList = data;

      });
    });
  }





  subDetails(event, item) {
    this.navCtrl.push('TSubjectWisePerformancePage', {
      item: item
    });
  }

  subjectDetails(event, item) {
    this.navCtrl.push('TStudentAttendenceListPage', {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TClassAggregateListPage');
  }

}
