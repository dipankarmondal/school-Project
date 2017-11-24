import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
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
  user: any;
  role:any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public userProvider: UserProvider, 
    public menuCntlr: MenuController,) {

    this.storage.get('token').then((value) => {
      if(value){
        this.user=JSON.parse(value);
        console.log('user ' + this.user)
        if (this.user.UserRole==3) {
          console.log('Token : ' + value);
          this.navCtrl.setRoot("StudentCornerPage");
        }
        if( this.user.UserRole==2){
          this.navCtrl.setRoot('TClassAggregateListPage');
        }
      }
      
    });

    this.loginDTO = { UserName: "", Password: "" };
    this.menuCntlr.swipeEnable(false);
  }




  login() {

    console.log("login clickd");
    
    this.userProvider.login(this.loginDTO).then(data => {
      if (data) {
        
        this.user=JSON.parse(JSON.stringify(data));
        console.log('user:'+this.user);
        if(this.user.UserRole==2){
          this.storage.set('token', JSON.stringify(data));
          console.log('userRole:'+this.user.userRole);
          this.navCtrl.push('TClassAggregateListPage');
        }
        if(this.user.UserRole==3){
          this.storage.set('token', JSON.stringify(data));
          console.log('userRole:'+this.user.userRole);
          this.navCtrl.push('StudentCornerPage');
        }
        
      }
    });
  }

  settings(){
    this.navCtrl.push('SettingsPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
