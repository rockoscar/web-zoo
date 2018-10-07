import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from  './servicios/usuario-servicios';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck {
  public title:String;
  public identity;
  

  constructor(
      private _userService: UserService,
      private _route: ActivatedRoute,
      private _router: Router
    ){
    this.title="Zoo";
  }

  ngOnInit(){
    this.identity = this._userService.getIdentity();
  }

  //para cada cambio en la app ejecuta el metodo
  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }

  //para cerrar sesion
  logout(){
    //borra el local storage
    localStorage.clear();
    //borrar la variable 
    this.identity = null;
    //redirecciona al incio
    this._router.navigate(['/']);
  }
  //se crea variable para el dato que obtendremos del localstorage
 /*
 
 lo hara el moduloemail
  emailContacto: string;
  
  //desde la creacion del modulo asignamos del local a nuestra variable
  ngOnInit(){
    
    this.emailContacto = localStorage.getItem('emailContacto');
    //console.log(localStorage.getItem('emailContacto'));
  } 
  
  
  ngDoCheck(){
       // console.log("se ejecuto el docheck en app component");
       //para que con cada cambio vaya a buscar la nueva variable ingresada(actualiza variable)
        this.emailContacto = localStorage.getItem('emailContacto');
    }
    
    borrarEmail(){
      //borra un item del local
      localStorage.removeItem('emailContacto');
      //borra todo el local
      localStorage.clear();
      //borra el contenido de la variable
      this.emailContacto=null;
    }
    */
  
}


