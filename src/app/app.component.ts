import { BarcodeScanner , BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
import { TabsPage } from './../pages/tabs/tabs';
import { Registro } from './../pages/registro/registro';
import { Login } from './../pages/login/login';
import { HomePage } from './../pages/home/home';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

      rootPage:any = TabsPage; //PRIMERA VISTA

      options: BarcodeScannerOptions;
      results:{};

  constructor(private barcode : BarcodeScanner ,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

    async scanBarcode(){
    
    this.options = {
      prompt : 'Escanea un codigo de barra...'
    }


     this.results = await this.barcode.scan(this.options);
    console.log(this.results);
  }
}
