import { Infoproducto } from './../infoproducto/infoproducto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner , BarcodeScannerOptions} from '@ionic-native/barcode-scanner';

/**
 * Generated class for the Escanearproducto page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-escanearproducto',
  templateUrl: 'escanearproducto.html',
})
export class Escanearproducto {

   options: BarcodeScannerOptions;
   results: any = {};

   codbarra = {};


  constructor(private barcode : BarcodeScanner,public navCtrl: NavController, public navParams: NavParams) {
  }

  
    ionViewWillEnter(){
         
    
          //this.scanBarcode();
   
    }
    


     async scanBarcode(){
    
    this.options = {
      prompt : 'Escanea un codigo de barra...'
    }


     this.results = await this.barcode.scan(this.options);


     //console.log(this.results);
  }


   
 loadinfoproducto(results){
     
           
  /* this.codbarra = {
     codigodebarra : results.text
    };*/
    
    this.codbarra = {
     codigodebarra : "333"
    };
 
 

      this.navCtrl.push(Infoproducto,{ "cod" : this.codbarra});
 }

   


}
