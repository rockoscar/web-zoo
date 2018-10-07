import { Component } from '@angular/core';

@Component({
  selector: 'guardar-email',
  template:   ` 
  <h4> {{ title }}</h4>
  <input type="text" [(ngModel)]="emailContacto" />
<!--boton que activa el evento de guardado-->
<button (click)="guardarEmail()" >Guarda email</button>
   ` ,
  
})
export class GuardarEmailComponent {
  title = 'Guardar email';
  //se crea variable para el dato que obtendremos del localstorage
  emailContacto: string;
  
  
  
   //desde la creacion del modulo asignamos del local a nuestra variable
  guardarEmail(){
    //agregamos al localsotrgae lo capturado por el input y se guada en emcailContacto
    localStorage.setItem('emailContacto', this.emailContacto);
    console.log(localStorage.getItem('emailContacto'));
  }
}