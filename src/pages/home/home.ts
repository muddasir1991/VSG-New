import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewpagePage } from '../newpage/newpage';
import { RegisterPage } from '../register/register';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  constructor(public navCtrl: NavController) {

  }

  goTologin(){
    this.navCtrl.push(NewpagePage);
   }
 goTosignUp(){
    this.navCtrl.push(RegisterPage);
   } 



}
