import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderSuccessPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-order-success',
  templateUrl: 'order-success.html',
})
export class OrderSuccessPage {

  farm = null;
  crop = null;
  fertiliser = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.farm = navParams.get('farm');
    this.crop = navParams.get('crop');
    this.fertiliser = navParams.get('fertiliser');
  }
}
