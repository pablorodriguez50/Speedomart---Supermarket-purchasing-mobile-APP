import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Escanearproducto } from './escanearproducto';

@NgModule({
  declarations: [
    Escanearproducto,
  ],
  imports: [
    IonicPageModule.forChild(Escanearproducto),
  ],
  exports: [
    Escanearproducto
  ]
})
export class EscanearproductoModule {}
