import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserTeacherProvider } from '../../providers/user-teacher/user-teacher';



@IonicPage()
@Component({
  selector: 'page-t-get-subject-wise-student-attendance-list',
  templateUrl: 't-get-subject-wise-student-attendance-list.html',
})
export class TGetSubjectWiseStudentAttendanceListPage {

  student: any;
  subjectId: any;
  studentId: any;
  attendenceList: any;
  items: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    public teacherProvider: UserTeacherProvider,) {

    this.student = navParams.get('item');
    this.subjectId = this.student.SubjectID;
    this.studentId = this.student.StudentID

    this.dateWiseAttendenceList()
  }

  dateWiseAttendenceList() {
    console.log('subject clicked');
    this.storage.get('token').then((value) => {
      console.log('subtoken: ' + JSON.parse(value).AuthToken);
      this.teacherProvider.GetSubjectWiseStudentAttendanceList(JSON.parse(value).AuthToken, this.subjectId.toString(), this.studentId.toString()).then(data => {
        console.log('list2: ' + JSON.stringify(data))
        console.log(this.subjectId)
        console.log(this.student.StudentID)
        this.attendenceList = data;
        this.items = data;
      });
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TGetSubjectWiseStudentAttendanceListPage');
  }

}
