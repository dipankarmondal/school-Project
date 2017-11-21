import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { UserTeacherProvider } from '../../providers/user-teacher/user-teacher';
import { Storage } from '@ionic/storage';
import { DateTime } from 'ionic-angular/components/datetime/datetime';


@IonicPage()
@Component({
  selector: 'page-t-student-attendence',
  templateUrl: 't-student-attendence.html',
})
export class TStudentAttendencePage {

  teacher: any;
  attendenceList: any;
  items: any;
  toggled: boolean;
  student: any;
  date: DateTime;
  searchstudent = '';
  subjectId:any;
  shortRemarkList: any;
  shortNameList: any;
  shortIdList: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public teacherProvider: UserTeacherProvider,
    public menuctrl: MenuController) {

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

    this.menuctrl.swipeEnable(true)
    this.dateWiseAttendance();
    this.toggled = false;
  }


  dateWiseAttendance() {
    console.log('subject clicked');
    this.storage.get('token').then((value) => {
      console.log('subtoken: ' + JSON.parse(value).AuthToken);
      console.log('this date: ' + this.date.toString());
      console.log('this subject: ' + this.subjectId)
      this.teacherProvider.GetDateWiseStudentWiseAttendance(JSON.parse(value).AuthToken, this.date.toString(), this.subjectId.toString() ).then(data => {
        console.log('list: ' + data)
        this.attendenceList = data;
        this.items = data;
        this.shortRemarkList= data;
        this.shortNameList= data;
        this.shortIdList= data;
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
      return (data.StudentID.toString().toLowerCase().indexOf(item.trim().toLowerCase()) > -1 || data.StudentName.toString().toLowerCase().indexOf(item.trim().toLowerCase()) > -1);
    });
  }

  shortStatus(){
    this.shortRemarkList = this.attendenceList.sort(function(a, b){return a - b});
    return this.shortRemarkList;
  }

  shortName(){
    this.shortNameList = this.attendenceList.sort();
    return this.shortNameList;
  }

  shortid(){
    this.shortIdList = this.attendenceList.sort(function(a, b){return a - b});
    return this.shortIdList;
  }

  nxt() {
    this.navCtrl.push('TClassAggregateListPage')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TStudentAttendencePage');
  }

}
