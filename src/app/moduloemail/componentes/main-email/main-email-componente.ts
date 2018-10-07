import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-email',
  template:   ` 
    <div class='panel panel-default'>
      <h1>{{title}}</h1>
      <mostrar-email></mostrar-email>
      <guardar-email></guardar-email>
    </div>
  
   ` ,
  
})
export class MainEmailComponent implements OnInit {
  title = 'Modulo de emails';
  //se crea variable para el dato que obtendremos del localstorage
 ngOnInit(){
   console.log("Se ha cargado el componente main");
 }
  
}