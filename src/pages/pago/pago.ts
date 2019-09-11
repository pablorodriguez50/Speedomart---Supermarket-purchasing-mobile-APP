import { FormBuilder, Validators } from '@angular/forms';


import { TabsPage } from './../tabs/tabs';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Infoproducto } from './../infoproducto/infoproducto';
import { Component } from '@angular/core';
import { ServiceProvider } from './../../providers/service/service-provider';

/**
 * Generated class for the Pago page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pago',
  templateUrl: 'pago.html',

  

})
export class Pago {

  productsCar : any[];
  total : any[];
  registrar2 : any = {}

  constructor(public geolocation : Geolocation,public navCtrl: NavController, public formBuilder : FormBuilder, private navParams: NavParams,public service : ServiceProvider) {
    this.registrar2 = this.formBuilder.group({
                  numTarjeta:['', Validators.required],
                  tipoTarjeta:['', Validators.required],
                  tipoBanco:['', Validators.required]
                  });

}

  ionViewDidLoad() {
    this.getListarCarrito();
    this.getTotal();
    console.log('ionViewDidLoad Pago');
  }

  getListarCarrito(){
        this.service.ListarProdCarrito().subscribe( (data) => 
        {
        this.productsCar = data
      }, err => console.log(err));      
    
    }
    
    getTotal()
    {
      this.service.totalCarrito().subscribe( (data) => 
        {
        this.total = data
      }, err => console.log(err)); 
    }

}
