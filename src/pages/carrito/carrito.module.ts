import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Carrito } from './carrito';

@NgModule({
  declarations: [
    Carrito,
  ],
  imports: [
    IonicPageModule.forChild(Carrito),
  ],
  exports: [
    Carrito
  ]
})
export class CarritoModule {}
