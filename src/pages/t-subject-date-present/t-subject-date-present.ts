import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserTeacherProvider } from '../../providers/user-teacher/user-teacher';
import { Storage } from '@ionic/storage';
import { DateTime } from 'ionic-angular/components/datetime/datetime';


@IonicPage()
@Component({
  selector: 'page-t-subject-date-present',
  templateUrl: 't-subject-date-present.html',
})
export class TSubjectDatePresentPage {

  teacher: any;
  attendenceList: any;
  date: DateTime;
  subjectId:any;
  filteredData: any;
  student: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public teacherProvider: UserTeacherProvider, ) {

      this.student = navParams.get('item');
      this.date = this.student.strAttendanceDate;
      console.log('date: ' + this.date);
      this.subjectId=this.student.SubjectID
      console.log('subject Code' + this.student.SubjectCode);

    this.storage.get('token').then((value) => {
      console.log('Token : ' + JSON.parse(value));
      console.log('Name : ' + JSON.parse(value).Name);
      this.teacher = JSON.parse(value);
    })
  
    this.dateWiseAttendance();
  
  }

  dateWiseAttendance() {
    console.log('subject clicked');
    this.storage.get('token').then((value) => {
      console.log('subtoken: ' + JSON.parse(value).AuthToken);
      console.log('this date: ' + this.date.toString());
      console.log('this subject: ' + this.subjectId)
      this.teacherProvider.GetDateWiseStudentWiseAttendance(JSON.parse(value).AuthToken, this.date.toString(), this.subjectId.toString()).then(data => {
        console.log('list: ' + data)
        this.attendenceList = data;
        this.filteredData= this.attendenceList.filter(item=> item.Remarks==='P')
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TSubjectDatePresentPage');
  }

}
