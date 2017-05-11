import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FarmPage } from './farm';

@NgModule({
  declarations: [
    FarmPage,
  ],
  imports: [
    IonicPageModule.forChild(FarmPage),
  ],
  exports: [
    FarmPage
  ]
})
export class FarmPageModule {}
