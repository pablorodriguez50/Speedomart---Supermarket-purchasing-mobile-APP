import { Pago } from './../pago/pago';
import { TabsPage } from './../tabs/tabs';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Infoproducto } from './../infoproducto/infoproducto';
import { Component } from '@angular/core';
import { ServiceProvider } from './../../providers/service/service-provider';

/**
 * Generated class for the Carrito page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-carrito',
  templateUrl: 'carrito.html',
})
export class Carrito {

  productsCar : any[];
  total : any[];

  constructor(public geolocation : Geolocation,public navCtrl: NavController, private navParams: NavParams,public service : ServiceProvider) {
    
  }

  ionViewDidLoad() {
    this.getListarCarrito();
    this.getTotal();
    console.log('ionViewDidLoad Carrito');
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

    borrarCar(productsCar) {
            // console.log(user);
            // console.log(user.id);
            this.service.borrarProdCarrito(productsCar)
                  .subscribe(
                        data=>{
                              console.log(data.mensage);
                              //this.getListarCarrito();
                              //this.getTotal();
                              this.navCtrl.setRoot(this.navCtrl.getActive().component);
                        },
                        err=>console.log(err)
                  );
        }

  pagarCarrito(){
   this.navCtrl.push(Pago);
  }   

  

}
