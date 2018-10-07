import { Component } from '@angular/core';

@Component({
  selector: 'admin-mostrar ',
  templateUrl: './mostrar-componente.html',
  
})
export class MostrarComponent {
  title = 'Mostrar';
  //forma 1 de crear un array
  //numeros=[0,1,2,3,4,5];
  numeros= new Array(10);
  
}