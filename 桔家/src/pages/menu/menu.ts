import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goSub(){
    this.navCtrl.push(SettingPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  

}
