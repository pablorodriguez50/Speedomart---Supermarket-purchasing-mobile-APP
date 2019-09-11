import { ServiceProvider } from './../../providers/service/service-provider';
import { MyApp } from './../../app/app.component';
import { HomePage } from './../home/home';
import { TabsPage } from './../tabs/tabs';
import { Registro } from './../registro/registro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastController, ViewController } from 'ionic-angular';


/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  
   login : any = {};
  

  constructor(public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams , public formBuilder : FormBuilder, 
                  public service : ServiceProvider, public app : MyApp) {

            this.login = this.formBuilder.group({
                  rut:['', Validators.required],
                  pass:['', Validators.required]
            });

          
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }*/

  
  validarLogin(){
     

    this.service.ValidarCredenciales(this.login.value)
    .subscribe(
      (data) => {
    console.log(data.mensage);
    console.log(data.rut);
    console.log(data.nombre);
    console.log(data.apellido);

    if(data.rut != null && data.nombre != null && data.apellido != null){
       this.navCtrl.push(TabsPage, {
        rutEncontrado: data.rut , nombreEncontrado: data.nombre , apellidoEncontrado: data.apellido
      });
    }else{

    
          let toast = this.toastCtrl.create({
          message : data.mensage,
          duration: 3000
    });
          toast.present();

    }
   

    },  err=>console.log(err)

    );
   
    }
  

  loadregistro(){
    this.navCtrl.push(Registro);
  }


}
