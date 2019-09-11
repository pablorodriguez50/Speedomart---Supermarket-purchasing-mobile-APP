import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Infoproducto } from './infoproducto';

@NgModule({
  declarations: [
    Infoproducto,
  ],
  imports: [
    IonicPageModule.forChild(Infoproducto),
  ],
  exports: [
    Infoproducto
  ]
})
export class InfoproductoModule {}
