import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { MenuController } from 'ionic-angular';





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private menuCtrl:MenuController) {


  }

goContact()
{
alert('hi');
this.navCtrl.setRoot(ContactPage);


}

toggleMenu() {
   this.menuCtrl.toggle();
 }


ionViewDidEnter() {
    this.menuCtrl.enable(true);
  }

  


}
