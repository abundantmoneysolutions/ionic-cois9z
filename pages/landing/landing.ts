import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }


v()
{

this.navCtrl.setRoot(HomePage);






}

}