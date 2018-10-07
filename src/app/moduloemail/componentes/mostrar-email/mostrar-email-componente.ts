import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  template:   ` 
 <!--Creamos la seccion donde solo si existe un email aparecera, que viene del localstorage-->
 <hr>
  <div *ngIf="emailContacto" >
    <h4> {{ title }}</h4>
    
    <strong>Email de contacto: </strong>{{emailContacto}}
    <!--boton que lanza evento para borrar correo-->
    <button (click)="borrarEmail()">Borrar email de contacto</button>
  </div>
                
   ` ,
  
})

export class MostrarEmailComponent implements OnInit, DoCheck {
  title = 'Mostrar email';
  //se crea variable para el dato que obtendremos del localstorage
  emailContacto: string;
  
  ngOnInit(){
    
    //desde que inicia el componente se carga la variable del ls 
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
  
  
 
  
}