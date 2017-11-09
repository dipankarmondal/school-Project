import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

export class LoginDTO {
  UserName: string;
  Password: string;
}

export class DateWiseAtendenceDTO {
  StartDate: Date;
  EndDate: Date;
  SubjectID: number;
}

/* export class AllClassAggregateDTO {
  ClassCode: number;
  SubjectID: string;
  TotalClass: number;
  Present: number;
  Absent: number;
  PresentPercentage: number;
  AbsentPercentage: number;
} */

//http://122.160.53.175:83/smartrollcall/api/WebRequest/Login?UserName="+loginDTO.UserName+"&Password="+loginDTO.Password
//http://122.160.53.175:83/smartrollcall/api/WebRequest/Login?UserName=13415&Password=1234
@Injectable()
export class UserProvider {

  // allClassAggregateDTO:AllClassAggregateDTO;

  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }


  login(loginDTO: LoginDTO): any {
    console.log("func called");

    return new Promise(resolve => {

      this.http.get("http://192.168.0.94:83/smartrollcall/api/WebRequest/Login?UserName=" + loginDTO.UserName + "&Password=" + loginDTO.Password)
        .map(res => res.json())
        .subscribe(
        data => { resolve(data) },
        err => { console.log(err) }
        );
      console.log("func2 called");

    });
  }

  stdntAttendChart(AuthToken: string) {
    let headers = new Headers({
      'AuthToken':  AuthToken
    });

    let options = new RequestOptions({
      headers: headers
    });
    return new Promise(resolve => {
      this.http.get("http://122.160.53.175:83/smartrollcall/api/WebRequest/GetAllClassAggregate", options)
        .map(res => res.json())
        .subscribe(
        data => { resolve(data) },
        err => { console.log(err) }
        );
    });
  }

  getClassAggregateList(AuthToken: string) {
    let headers = new Headers({
      'AuthToken':  AuthToken
    });

    let options = new RequestOptions({
      headers: headers
    });
    return new Promise(resolve => {
      this.http.get("http://122.160.53.175:83/smartrollcall/api/WebRequest/GetClassAggregateList", options)
        .map(res => res.json())
        .subscribe(
        data => { resolve(data) },
        err => { console.log(err) }
        );
    });
  }


  getDateWiseList(date: DateWiseAtendenceDTO, AuthToken: string) {
    let headers = new Headers({
      'AuthToken':  AuthToken
    });

    let options = new RequestOptions({
      headers: headers
    });
    return new Promise(resolve => {
      this.http.get("http://122.160.53.175:83/smartrollcall/api/WebRequest/GetDateWiseAttendance?StartDate=" + date.StartDate + "&EndDate=" + date.EndDate + "&SubjectID=" + date.SubjectID, options)
        .map(res => res.json())
        .subscribe(
        data => { resolve(data) },
        err => { console.log(err) }
        );
    });
  }

  getTodaysAttendance(AuthToken:string){
    let headers = new Headers({
      'AuthToken':  AuthToken
    });

    let options = new RequestOptions({
      headers: headers
    });
    return new Promise(resolve => {
      this.http.get("http://122.160.53.175:83/smartrollcall/api/WebRequest/GetTodaysAttendance", options)
        .map(res => res.json())
        .subscribe(
        data => { resolve(data) },
        err => { console.log(err) }
        );
    });
  }

}
