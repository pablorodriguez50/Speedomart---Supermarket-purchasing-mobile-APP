import { ServiceProvider } from './../../providers/service/service-provider';
import { Infoproducto } from './../infoproducto/infoproducto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 


/**
 * Generated class for the Home2 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class Home2 {

    products : any[];
    cate : any[];
    categoriaseleccionada = {};
  
    //productos listado por categoria 
 
    products2 : any [];
    //CATencontrada : string

  constructor(public navCtrl: NavController, public navParams: NavParams , public service :ServiceProvider) {

            this.products2 = navParams.get('productsCAT');
            //this.CATencontrada = navParams.get('catEncontrada');

  }


    ionViewWillEnter(){
      
    //this.getListarHome2();
    this.getListarCate();
  }



     /*getListarHome2(){
      
           
      }*/

  getListarCate(){
        this.service.ListarCate().subscribe(
          data2 => this.cate = data2,
          err => console.log(err)
        );      
      }


  moverCategoria(gaming)
  {
     
   this.categoriaseleccionada = {
     categoria : gaming
    };


 
      this.service.ListarProdHome2(this.categoriaseleccionada).subscribe(
      (data) => {
    /*console.log(data.mensage);
    console.log(data.codigo);
    console.log(data.nombre);
    console.log(data.imagen);
    console.log(data.precio);*/

    if(data != null){

         this.products2 = (data);
         //this.CATencontrada = (data.categoria);
  
      
      }
     },err => console.log(err)
          
        );      
    
    //console.log(gaming);
  }


   loadinfoprod(){
       
       this.navCtrl.push(Infoproducto);
          
   }
    
 
    refreshPage(){
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }


}
