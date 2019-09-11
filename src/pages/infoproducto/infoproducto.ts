import { ServiceProvider } from './../../providers/service/service-provider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
/**
 * Generated class for the Infoproducto page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-infoproducto',
  templateUrl: 'infoproducto.html',
})
export class Infoproducto {
     
  
  

      codigodebarra = {};
    
      error : string;
 
      nombreproducto : string;

      mensaje : string;

      imagenproducto : string;

      precioproducto : number;

  constructor(public navCtrl: NavController, public navParams: NavParams , public service : ServiceProvider) {
      
      this.codigodebarra = navParams.get('cod');
  }

        
          ionViewWillEnter(){
             
             this.MostrarProductoScan();
     
   
            }
    


         MostrarProductoScan(){
        this.service.EscanerProducto(this.codigodebarra).subscribe(
      (data) => { this.nombreproducto = (data.nombre);
                  this.imagenproducto = (data.imagen);
                  this.precioproducto = (data.precio);
                  this.mensaje = (data.mensaje);
         
                 },
          err => this.error = (err)
        );      
      }

}
