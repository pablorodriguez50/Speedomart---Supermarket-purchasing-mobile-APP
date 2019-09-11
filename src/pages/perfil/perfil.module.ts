import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Perfil } from './perfil';

@NgModule({
  declarations: [
    Perfil,
  ],
  imports: [
    IonicPageModule.forChild(Perfil),
  ],
  exports: [
    Perfil
  ]
})
export class PerfilModule {}
