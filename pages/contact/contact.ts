import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private menuCtrl:MenuController) {
      this.menuCtrl.enable(true);



  }



getTarrot(v){

alert(v);

	

}


toggleMenu() {
   this.menuCtrl.toggle();
 }


ionViewDidEnter() {
  }




}
