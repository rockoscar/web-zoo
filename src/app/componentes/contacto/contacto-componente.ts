import { Component, OnInit } from '@angular/core';
import { fundido } from '../animaciones';

@Component({
  selector: 'contacto',
  templateUrl: './contacto-componente.html',
  animations: [ fundido ]
  
})
export class ContactoComponent implements OnInit {
  title = 'Contacto';
  //se crea lo que vamos a guardar
  emailContacto: string;
  
  ngOnInit(){
        console.log("contacto-componente cargado");
    }
  
  //se genera el metodo que va capturar la informacion deseada
  guardarEmail(){
    localStorage.setItem('emailContacto', this.emailContacto);
    console.log(localStorage.getItem('emailContacto'));
  }
  
}