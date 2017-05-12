import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FarmDetailPage } from '../farm-detail/farm-detail';

@IonicPage()
@Component({
  selector: 'page-farm',
  templateUrl: 'farm.html',
})
export class FarmPage {

  farms = [
    {
      'id': 0,
      'name': 'Berningdale Farm',
      'location': 'South Australia',
      'soil_type': 'Sandy Soil',
      'description': 'Brunsdale farm has a history of great product with a friendly team of family run farmers dedicated to producing great produce'
    },
    {
      'id': 1,
      'name': 'Berningdale Farm',
      'location': 'South Australia',
      'soil_type': 'Sandy Soil',
      'description': 'Brunsdale farm has a history of great product with a friendly team of family run farmers dedicated to producing great produce'
    },
    {
      'id': 2,
      'name': 'Berningdale Farm',
      'location': 'South Australia',
      'soil_type': 'Sandy Soil',
      'description': 'Brunsdale farm has a history of great product with a friendly team of family run farmers dedicated to producing great produce'
    }
  ];

  selectedCrop = null;
  selectedFertiliser = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedCrop = navParams.get('crop');
    this.selectedFertiliser = navParams.get('fertiliser');
  }

  goToFarmDetailPage(item) {
    this.navCtrl.push(FarmDetailPage, {
      farm: item,
      crop: this.selectedCrop,
      fertiliser: this.selectedFertiliser,
    });
  }
}
