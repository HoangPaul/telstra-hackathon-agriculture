import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FarmPage } from '../farm/farm';
/**
 * Generated class for the CropPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-crop',
  templateUrl: 'crop.html',
})
export class CropPage {

  farm = FarmPage;
  cropItems = [];
  fertiliserItems = [
    {
      'id': 0,
      'name': 'Mixture A',
      'description': 'A mix of homemade compost, blood and bone, and potash',
      'isSelected': true
    },
    {
      'id': 1,
      'name': 'Homemade Compost',
      'description': 'Rich, fresh homemade compost',
      'isSelected': false
    },
    {
      'id': 2,
      'name': 'None',
      'description': 'No fertiliser will be used',
      'isSelected': false
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cropItems.push({
      'id': 0,
      'name': 'Brandywine',
      'description': 'Light and tangy flavour, filled with umami, commonly used in pizza',
      'isSelected': true
    });

    for (let i = 1; i < 3; i++) {
      this.cropItems.push({
        'id': i,
        'name': 'Brandywine',
        'description': 'Light and tangy flavour, filled with umami, commonly used in pizza',
        'isSelected': false
      });
    }
  }

  selectCropItem(item) {
    const id = item.id;
    for (let i = 0; i < this.cropItems.length; i++) {
      this.cropItems[i].isSelected = this.cropItems[i].id === id;
    }
  }

  selectFertiliserItem(item) {
    const id = item.id;
    for (let i = 0; i < this.fertiliserItems.length; i++) {
      this.fertiliserItems[i].isSelected = this.fertiliserItems[i].id === id;
    }
  }
}
