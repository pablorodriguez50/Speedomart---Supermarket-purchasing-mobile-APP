import { Injectable } from '@angular/core';
import { Http , Headers, Response , ResponseOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ServiceProvider {
     
    //api : string = "http://localhost:8080/SpeedoApp/php/";

   api : string = "http://localhost:8080/SpeedoApp/php/";

  constructor(public http: Http) {
    console.log('Hello ServiceProvider Provider');
  }

       ValidarCredenciales(params)
    {   
         let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
          return this.http.post(this.api + 'validarlogin.php' , params,{ 
           headers:headers,
           method:"POST",
         }).map(
           (res:Response) => {return res.json();}
         );  
      }


    registrarCliente(params)
    {   
         let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded'});
          return this.http.post(this.api + 'registro.php' , params,{ 
           headers:headers,
           method:"POST",
         }).map(
           (res:Response) => {return res.json();}
         );  
      }

      ListarProdHome(){
      
      var response = this.http.get(this.api + 'home.php').map(res=> res.json())
      return response;
   
    }

    ListarProdCarrito(){
      
      var response = this.http.get(this.api + 'carrito.php').map(res=> res.json())
      return response;
   
    }

    totalCarrito(){      
      var response = this.http.get(this.api + 'calTotalCarrito.php').map(res=> res.json())
      return response;   
    }

    numeroCarrito(){      
      var response = this.http.get(this.api + 'calNumCarrito.php').map(res=> res.json())
      return response;   
    }

    borrarProdCarrito(id)
    {   
         let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded'});
          return this.http.post(this.api + 'borrarProdCarrito.php' , id,{ 
           headers:headers,
           method:"POST",
         }).map(
           (res:Response) => {return res.json();}
         );  
      }
     


      ListarProdHome2(params)
    {   
         let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded'});
          return this.http.post(this.api + 'home2.php' , params,{ 
           headers:headers,
           method:"POST",
         }).map(
           (res:Response) => {return res.json();}
         );  
      }


    ListarCate(){
      
      var response = this.http.get(this.api + 'listarCate.php').map(res=> res.json())
      return response;
   
    }

      EscanerProducto(params)
    {   
         let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded'});
          return this.http.post(this.api + 'escanerproducto.php' , params,{ 
           headers:headers,
           method:"POST",
         }).map(
           (res:Response) => {return res.json();}
         );  
      }




}
