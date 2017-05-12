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

  cropItems = [];
  fertiliserItems = [
    {
      'id': 0,
      'name': 'Mixture A Fertiliser',
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
      'name': 'No Fertiliser',
      'description': 'No fertiliser will be used',
      'isSelected': false
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cropItems.push({
      'id': 0,
      'name': 'Brandywine Tomatoes',
      'description': 'Light and tangy flavour, filled with umami, commonly used in pizza',
      'isSelected': true
    });

    for (let i = 1; i < 3; i++) {
      this.cropItems.push({
        'id': i,
        'name': 'Brandywine Tomatoes',
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

  getSelectedCropItem() {
    for (let i = 0; i < this.cropItems.length; i++) {
      if (this.cropItems[i].isSelected) {
        return this.cropItems[i];
      }
    }
  }

  getSelectedFertiliserItem() {
    for (let i = 0; i < this.fertiliserItems.length; i++) {
      if (this.fertiliserItems[i].isSelected) {
        return this.fertiliserItems[i];
      }
    }
  }

  continueToNextPage() {
    const selectedCrop = this.getSelectedCropItem();
    const selectedFeriliser = this.getSelectedFertiliserItem();

    this.navCtrl.push(FarmPage, {
      'crop': selectedCrop,
      'fertiliser': selectedFeriliser
    })
  }
}
