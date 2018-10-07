import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
//importamos la clase del modelo
import { User } from '../../modelos/usuario';

import { GLOBAL } from '../../servicios/global';
//exporta la clase del servicio usuarios
import { UserService } from'../../servicios/usuario-servicios';

@Component({
    selector: 'registro',
    templateUrl: './registro-componente.html',
    //se incluye de forma local agregando el providers
    providers: [UserService]
})

export class RegisterComponent {
    public titulo: String;
    //declaramos la variable del tipo User modelo
    public user: User;
    public status: String;
    
    
    constructor(
            //crean variables de las rutas
            private _route: ActivatedRoute,
            private _router: Router,
            private _userService: UserService
        ){
            this.titulo='Registro';
            //inicializamos la variable con ciertos campos en l blanco y default
            this.user= new User ('', '', '', '','','ROLE_USER','');
            //this.user= new User ();
        }
        
    ngOnInit(){
       // console.log('registro componente cargado');
        //mostramos el metodo register del servicio
       //console.log(this._userService.registro());
    }
    
    //al efectuar el metodo del boton mandamos el objeto user a la consola
    onSubmit(registerForm){

        //console.log(this.user);
      
        //usamos el servicio que hara la req al api, mandando el objeto llenado en el form
        this._userService.registro(this.user).subscribe(
              //res del api
              response => {
                  //la respuesta del api manda conforme el nombre que se haya usado en el api
                  //en este caso se llamo usuario
                  //valida que exista el objeto y una propiedad del objeto en la res
                  if(response.usuario && response.usuario._id){
                      //this.user= response.user;

                      //cambia el status
                      this.status='Exitoso';
                      //resetea el objeto usuario
                      this.user= new User ('', '', '', '','','ROLE_USER','');
                      //limpia el registro
                      registerForm.reset();
                  
                  }else{
                      this.status='Error';
                  }
              
                  
              },
              error => {
                  console.log(<any>error);
              }
            );
            
    }
}
