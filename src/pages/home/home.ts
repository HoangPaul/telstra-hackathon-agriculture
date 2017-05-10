import { Component, ViewChild } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Content } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content: Content;

  items = [];

  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 10; i++) {
      this.items.push({
        'name': 'Tomatoes',
        'harvest': 'June - July Harvest'
      });
    }
  }

  scrollTo() {
    this.content.scrollTo(0, 500, 1000);
  }
}