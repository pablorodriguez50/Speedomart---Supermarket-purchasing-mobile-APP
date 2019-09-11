import { Escanearproducto } from './../escanearproducto/escanearproducto';
import { Infoproducto } from './../infoproducto/infoproducto';
import { Login } from './../login/login';
import { HomePage } from './../home/home';
import { Perfil } from './../perfil/perfil';
import { Carrito } from './../carrito/carrito';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner , BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
import { ServiceProvider } from './../../providers/service/service-provider';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
    
  rut : string;
  nombre : string;
  apellido : string;
  num : any[];

  tab1Root = HomePage;
  tab2Root = Carrito;
  tab3Root = Perfil;

     

  constructor(private barcode : BarcodeScanner,public navCtrl: NavController, private navParams: NavParams, public service : ServiceProvider) {
    this.rut = navParams.get('rutEncontrado'); 
    this.nombre = navParams.get('nombreEncontrado');
    this.apellido = navParams.get('apellidoEncontrado');  

  }

  onPageWillEnter()
  {
    this.getNumberCarrito();
    this.navCtrl.push(Carrito);
  }

  onPageDidEnter()
  {
    this.getNumberCarrito();
    this.navCtrl.push(Carrito);
  }

  ionViewDidLoad() {
    this.getNumberCarrito();
    console.log('ionViewDidLoad Perfil');
  }
   

    scan(){
      this.navCtrl.push(Escanearproducto);
    }
 
  

   cerrarsesion(){
     this.navCtrl.push(Login);
   }

   getNumberCarrito()
   {
     this.service.numeroCarrito().subscribe( (data) => 
        {
        this.num = data
      }, err => console.log(err)); 
   }
  
}
