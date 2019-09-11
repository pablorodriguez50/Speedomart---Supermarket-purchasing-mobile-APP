import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Pago } from './pago';

@NgModule({
  declarations: [
    Pago,
  ],
  imports: [
    IonicPageModule.forChild(Pago),
  ],
  exports: [
    Pago
  ]
})
export class PagoModule {}
