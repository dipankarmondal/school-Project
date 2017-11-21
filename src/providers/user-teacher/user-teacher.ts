import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserTeacherProvider {

  constructor(public http: Http) {
    console.log('Hello UserTeacherProvider Provider');
  }

  GetDateWiseStudentWiseAttendance(AuthToken: string, date: string, SubjectID: string) {
    let headers = new Headers({
      'AuthToken': AuthToken
    });

    let options = new RequestOptions({
      headers: headers
    });
    return new Promise(resolve => {
      this.http.get("http://192.168.0.94:83/SmartRollCall/api/WebRequest/GetDateWiseStudentWiseAttendance?StartDate=" + date + "&EndDate=" + date + "&SubjectID=" + SubjectID, options)
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
      this.http.get("http://122.160.53.175:83/smartrollcall/api/WebRequest/GetProfessorClassAggregateList", options)
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
      this.http.get("http://122.160.53.175:83/smartrollcall/api/WebRequest/GetDateWiseStudentClassAggregateList?StartDate=&EndDate=&SubjectID=" + SubjectID, options)
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
      this.http.get("http://122.160.53.175:83/smartrollcall/api/WebRequest/GetProfessorAllClassAggregate", options)
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
      this.http.get("http://122.160.53.175:83/smartrollcall/api/WebRequest/GetStudentWiseClassAggregateList?StartDate=&EndDate=&SubjectID=" + SubjectID, options)
        .map(res => res.json())
        .subscribe(
        data => { resolve(data) },
        err => { console.log(err) }
        );
    });
  }

  GetSubjectWiseStudentAttendanceList(AuthToken: string, SubjectID: string, StudentID: string){
    let headers = new Headers({
      'AuthToken': AuthToken
    });

    let options = new RequestOptions({
      headers: headers
    });
    return new Promise(resolve => {
      this.http.get("http://122.160.53.175:83/smartrollcall/api/WebRequest/GetSubjectWiseStudentAttendanceList?StartDate=&EndDate=&SubjectID="+SubjectID+"&StudentID="+StudentID, options)
        .map(res => res.json())
        .subscribe(
        data => { resolve(data) },
        err => { console.log(err) }
        );
    });
  }

  //122.160.53.175:83
}
