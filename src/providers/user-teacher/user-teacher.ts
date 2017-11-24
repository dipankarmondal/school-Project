import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


@Injectable()
export class UserTeacherProvider {
  myApi: any;
  mystr: any;
  constructor(public http: Http,
    public storage: Storage) {
    console.log('Hello UserTeacherProvider Provider');
    this.storage.get('IP').then((value) => {
      this.myApi= value;
      console.log('your API: ' + this.myApi);
    })
  }

  GetDateWiseStudentWiseAttendance(AuthToken: string, date: string, SubjectID: string) {
    let headers = new Headers({
      'AuthToken': AuthToken
    });

    let options = new RequestOptions({
      headers: headers
    });
    return new Promise(resolve => {
      this.http.get(this.myApi+"/api/WebRequest/GetDateWiseStudentWiseAttendance?StartDate=" + date + "&EndDate=" + date + "&SubjectID=" + SubjectID, options)
        .map(res => res.json())
        .subscribe(
        data => { resolve(data) },
        err => { console.log(err) }
        );
    });
  }

  GetProfessorClassAggregateList(AuthToken: string) {
    console.log('list called');
    let headers = new Headers({
      'AuthToken': AuthToken
    });

    let options = new RequestOptions({
      headers: headers
    });
    return new Promise(resolve => {
      this.http.get(this.myApi+"/api/WebRequest/GetProfessorClassAggregateList", options)
        .map(res => res.json())
        .subscribe(
        data => { resolve(data) },
        err => { console.log(err) }
        );
    });
  }

  subjectBasedAttnd(AuthToken: string, SubjectID: string) {
    let headers = new Headers({
      'AuthToken': AuthToken
    });

    let options = new RequestOptions({
      headers: headers
    });
    return new Promise(resolve => {
      this.http.get(this.myApi+"/api/WebRequest/GetDateWiseStudentClassAggregateList?StartDate=&EndDate=&SubjectID=" + SubjectID, options)
        .map(res => res.json())
        .subscribe(
        data => { resolve(data) },
        err => { console.log(err) }
        );
    });
  }

  GetProfessorAllClassAggregate(AuthToken: string) {
    let headers = new Headers({
      'AuthToken': AuthToken
    });

    let options = new RequestOptions({
      headers: headers
    });
    return new Promise(resolve => {
      this.http.get(this.myApi+"/smartrollcall/api/WebRequest/GetProfessorAllClassAggregate", options)
        .map(res => res.json())
        .subscribe(
        data => { resolve(data) },
        err => { console.log(err) }
        );
    });
  }

  GetStudentWiseClassAggregateList(AuthToken: string, SubjectID: string) {
    let headers = new Headers({
      'AuthToken': AuthToken
    });

    let options = new RequestOptions({
      headers: headers
    });
    return new Promise(resolve => {
      this.http.get(this.myApi+"/api/WebRequest/GetStudentWiseClassAggregateList?StartDate=&EndDate=&SubjectID=" + SubjectID, options)
        .map(res => res.json())
        .subscribe(
        data => { resolve(data) },
        err => { console.log(err) }
        );
    });
  }

  GetSubjectWiseStudentAttendanceList(AuthToken: string, SubjectID: string, StudentID: string) {
    let headers = new Headers({
      'AuthToken': AuthToken
    });

    let options = new RequestOptions({
      headers: headers
    });
    return new Promise(resolve => {
      this.http.get(this.myApi+"/api/WebRequest/GetSubjectWiseStudentAttendanceList?StartDate=&EndDate=&SubjectID=" + SubjectID + "&StudentID=" + StudentID, options)
        .map(res => res.json())
        .subscribe(
        data => { resolve(data) },
        err => { console.log(err) }
        );
    });
  }

  //122.160.53.175:83
}
