import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderSuccessPage } from './order-success';

@NgModule({
  declarations: [
    OrderSuccessPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderSuccessPage),
  ],
  exports: [
    OrderSuccessPage
  ]
})
export class OrderSuccessPageModule {}
