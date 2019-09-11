import { ServiceProvider } from './../../providers/service/service-provider';
import { Login } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home'
import { AlertController } from 'ionic-angular';
import { ToastController, ViewController } from 'ionic-angular';

/**
 * Generated class for the Registro page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class Registro {

  mensaje : string
  registrar : any = {}
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
                  public formBuilder : FormBuilder, 
                  public service : ServiceProvider,
                  public alertCtrl: AlertController, public viewctrl : ViewController ) {

                  this.registrar = this.formBuilder.group({
                  rut:['', Validators.required],
                  nombre:['', Validators.required],
                  apellido:['', Validators.required],
                  correo:['', Validators.required],
                  pass:['', Validators.required]});
  }

 /* submit(){
  this.navCtrl.push(Login,{});
}*/

  registrarCliente(){
    
         
  
    this.service.registrarCliente(this.registrar.value)
    .subscribe(
        (data) => {
          this.mensaje = data.mensaje;

          let toast = this.toastCtrl.create({
          message : this.mensaje,
          duration: 3000
    });
          toast.present();
        },
        
          err=>console.log(err)
    );
  }
     
 backtologin(){
   this.navCtrl.push(Login);
 }

}
