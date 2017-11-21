import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserTeacherProvider } from '../../providers/user-teacher/user-teacher';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-t-subject-wise-performance',
  templateUrl: 't-subject-wise-performance.html',
})
export class TSubjectWisePerformancePage {

  subject: any;
  attendenceList: any;
  user: any;
  item: any;
  SubjectId:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public storage: Storage,
     public teacher: UserTeacherProvider) {
      this.storage.get('token').then((value) => {
        console.log('Token : ' + JSON.parse(value));
        console.log('Name : ' + JSON.parse(value).Name);
        this.user = JSON.parse(value);
  
        this.subject = navParams.get('item');
        this.SubjectId= this.subject.SubjectID
        
        console.log('sub:'+this.subject);
        this.subjectAttendence();
      })
  }

  subjectAttendence(){
    this.storage.get('token').then((value)=>{
      console.log('token ' + JSON.parse(value).AuthToken);
      this.teacher.subjectBasedAttnd(JSON.parse(value).AuthToken, this.SubjectId.toString()).then(data=>{
        
        console.log('stu data: ' + JSON.stringify(data))
        this.attendenceList = data;
      })
    })
  }

  attend(event, item){
    this.navCtrl.push('TStudentAttendencePage',{
      item:item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TSubjectWisePerformancePage');
  }

}
