import { ServiceProvider } from './../../providers/service/service-provider';
import { Home2 } from './../home2/home2';
import { Geolocation } from '@ionic-native/geolocation';
import { Infoproducto } from './../infoproducto/infoproducto';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
    
   //location : any;
    products : any[];
    cate : any[];
    categoriaseleccionada = {};

  constructor(public geolocation : Geolocation,public navCtrl: NavController, private navParams: NavParams,public service : ServiceProvider) {
    
  }
   


    ionViewWillEnter(){
    this.getListarHome();
    this.getListarCate();
  }



     getListarHome(){
        this.service.ListarProdHome().subscribe(
          data => this.products = data,
          err => console.log(err)
        );      
      }

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
    

    if(data != null){
        this.navCtrl.push(Home2, {
        productsCAT: data
        //catEncontrada : data.categoria
      });
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

   /*tulocalizacion(){
      this.geolocation.getCurrentPosition()
      .then(
        (location) => {
          console.log("localizacion ok");
          this.location = location;
        }
      )
      .catch(
           (error) => console.log("error!")
      );

   } */
   


}
