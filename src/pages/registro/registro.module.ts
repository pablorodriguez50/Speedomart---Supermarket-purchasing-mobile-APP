import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Registro } from './registro';

@NgModule({
  declarations: [
    Registro,
  ],
  imports: [
    IonicPageModule.forChild(Registro),
  ],
  exports: [
    Registro
  ]
})
export class RegistroModule {}
