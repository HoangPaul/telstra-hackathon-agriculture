import { Component, ViewChild } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Content } from 'ionic-angular';

import { CropPage } from '../crop/crop';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content: Content;

  items = [
    {
      'name': 'Tomatoes',
      'harvest': 'Nov - Dec Harvest',
      'image': '350x350.jpeg'
    },
    {
      'name': 'Basil',
      'harvest': 'June - July Harvest',
      'image': 'basil.Jpg'
    },
    {
      'name': 'Fennel',
      'harvest': 'Jul - Aug Harvest',
      'image': 'fennel.jpg'
    }
  ];

  seasonalItems = [
    {
      'name': 'Garlic',
      'harvest': 'Nov - Dec Harvest',
      'image': 'garlic.jpg'
    },
    {
      'name': 'Cucumber',
      'harvest': 'Jul - Aug Harvest',
      'image': 'cucumber.png'
    },
    {
      'name': 'Parsley',
      'harvest': 'June - July Harvest',
      'image': 'parsley.jpg'
    }
  ];

  allItems = [];

  constructor(public navCtrl: NavController) {
    for (let i = 0; i < this.items.length; i++) {
      this.allItems.push(this.items[i]);
      this.allItems.push(this.seasonalItems[i]);
    }
  }

  goToCropPage() {
    this.navCtrl.push(CropPage);
  }
}
