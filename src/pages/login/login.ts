import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider, LoginDTO } from '../../providers/user/user';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserProvider]
})

export class LoginPage {
  loginDTO: LoginDTO;
  loader: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public userProvider: UserProvider, ) {

    this.storage.get('token').then((value) => {
      if (value) {
        console.log('Token : ' + value);
        this.navCtrl.setRoot("StudentCornerPage");
      }
    });

    this.loginDTO = { UserName: "", Password: "" };
  }


  createAccount() {
    this.navCtrl.push('RegisterPage');
  }

  login() {

    console.log("login clickd");
    this.userProvider.login(this.loginDTO).then(data => {
      console.log(data);
      if (data) {
        this.storage.set('token', JSON.stringify(data));
        this.navCtrl.push('StudentCornerPage');
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
