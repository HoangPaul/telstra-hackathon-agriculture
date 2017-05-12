import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderSuccessPage } from '../order-success/order-success';

/**
 * Generated class for the FarmDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-farm-detail',
  templateUrl: 'farm-detail.html',
})
export class FarmDetailPage {

  /**
   * @type {{id: int, name: string, location: string, soil_type: string, description: string}}
   */
  farm = null;

  /**
   * @type {{id: int, name: string, description: string, isSelected: boolean}}
   */
  crop = null;

  /**
   * @type {{id: int, name: string, description: string, isSelected: boolean}}
   */
  fertiliser = null;

  isLoading = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.farm = navParams.get('farm');
    this.crop = navParams.get('crop');
    this.fertiliser = navParams.get('fertiliser');
  }

  placeOrder() {
    this.isLoading = true;

    setTimeout(() => {
      this.navCtrl.setRoot(OrderSuccessPage, {
        farm: this.farm,
        crop: this.crop,
        fertiliser: this.fertiliser,
      });
    }, 3000);
  }
}
