import { Home2 } from './../pages/home2/home2';
import { ServiceProvider } from './../providers/service/service-provider';
import { Perfil } from './../pages/perfil/perfil';
import { Escanearproducto } from './../pages/escanearproducto/escanearproducto';

import { Registro } from './../pages/registro/registro';
import { Pago } from './../pages/pago/pago';
import { Infoproducto } from './../pages/infoproducto/infoproducto';
import { Carrito } from './../pages/carrito/carrito';
import { Login } from './../pages/login/login';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Geolocation } from '@ionic-native/geolocation';
import { TabsPage } from './../pages/tabs/tabs';

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Carrito,
    Infoproducto,
    Login,
    Pago,
    Registro,
    TabsPage,
    Home2,
    Escanearproducto,
    Perfil


  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Carrito,
    Infoproducto,
    Login,
    Pago,
    Registro,
    TabsPage,
    Home2,
    Escanearproducto,
    Perfil


    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    Geolocation,
    ServiceProvider
  ]
})
export class AppModule {}
