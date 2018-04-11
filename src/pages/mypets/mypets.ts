import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MypetPage } from '../mypet/mypet';

/**
 * Generated class for the MypetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mypets',
  templateUrl: 'mypets.html',
})
export class MypetsPage {

  constructor(public navCtrl: NavController,private alertController:AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MypetsPage');
  }

  gotomypetPage(){
    this.navCtrl.push(MypetPage);

  }


  OpenTodoAlert(){

	let alertCont = this.alertController.create({
         title:"Add your pet here",
        
         inputs:[{
             type:"text",
             name:"addtodo"

         }],
         buttons:[
         { text:"Cancel" },
         { text:"Add",
           handler:(inputData)=>{
            let input;
             input = inputData.addtodo;
              


           }

           }

         ]


	});
	alertCont.present();
}

}
