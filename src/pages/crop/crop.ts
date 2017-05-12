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

  cropItems = [
    {
      'id': 0,
      'name': 'Brandywine Tomatoes',
      'description': 'Light and tangy flavour, filled with umami, commonly used in pizza',
      'image': '350x350.jpeg',
      'isSelected': true
    },
    {
      'id': 1,
      'name': 'Mortgage Lifter Tomatoes',
      'description': 'Light and tangy flavour, filled with umami, commonly used in pizza',
      'image': 'tomato_mortgage_lifter.jpg',
      'isSelected': true
    },
    {
      'id': 2,
      'name': 'Heirloom Tomatoes',
      'description': 'Light and tangy flavour, filled with umami, commonly used in pizza',
      'image': 'heirloom-tomato.jpg',
      'isSelected': true
    }
  ];

  fertiliserItems = [
    {
      'id': 0,
      'name': 'Mixture A Fertiliser',
      'description': 'A mix of homemade compost, blood and bone, and potash',
      'isSelected': true,
      'image': '400x400.jpg',
    },
    {
      'id': 1,
      'name': 'Homemade Compost',
      'description': 'Rich, fresh homemade compost',
      'isSelected': false,
      'image': '400x400.jpg',
    },
    {
      'id': 2,
      'name': 'No Fertiliser',
      'description': 'No fertiliser will be used',
      'isSelected': false,
      'image': '400x400_placeholder.png',
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
