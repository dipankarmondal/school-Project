import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserTeacherProvider } from '../../providers/user-teacher/user-teacher';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-t-student-attendence-list',
  templateUrl: 't-student-attendence-list.html',
})
export class TStudentAttendenceListPage {

  attendenceList: any;
  student: any;
  subjectId: any;
  items: any;
  toggled: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public teacherProvider: UserTeacherProvider, ) {

    this.student = navParams.get('item');
    this.subjectId = this.student.SubjectID;


    this.classAgregateList();
  }

  classAgregateList() {
    console.log('subject clicked');
    this.storage.get('token').then((value) => {
      console.log('subtoken: ' + JSON.parse(value).AuthToken);
      this.teacherProvider.GetStudentWiseClassAggregateList(JSON.parse(value).AuthToken, this.subjectId.toString()).then(data => {
        console.log('list2: ' + JSON.stringify(data))
        console.log(this.subjectId)
        console.log(this.student.StudentID)
        this.attendenceList = data;
        this.items = data;
      });
    });
  }

  toggleSearch() {
    this.toggled = this.toggled ? false : true;
  }

  getFilteredItem(searchbar) {
    var item = searchbar.target.value;
    this.attendenceList = this.items.filter((data) => {
      //let myItem = JSON.parse(JSON.stringify(data))
      return (data.StudentID.toString().toLowerCase().indexOf(item.trim().toLowerCase()) > -1 || 
              data.StudentName.toString().toLowerCase().indexOf(item.trim().toLowerCase()) > -1);
    });
  }

  listPage($event, item){
    this.navCtrl.push('TGetSubjectWiseStudentAttendanceListPage',{
      item:item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TStudentAttendenceListPage');
  }

}
