import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MypetsPage } from '../mypets/mypets';
/**
 * Generated class for the NewpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newpage',
  templateUrl: 'newpage.html',
})
export class NewpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  

  gotoMypetspage(){
    this.navCtrl.push(MypetsPage);
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewpagePage');
  }

}
