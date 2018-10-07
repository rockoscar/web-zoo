import { Component, OnInit } from '@angular/core';
import { fundido } from '../animaciones';

@Component({
  selector: 'animales',
  templateUrl: './animales-componente.html',
  animations: [ fundido ]
  
})
export class AnimalesComponent implements OnInit {
  title = 'Animales';
  
  ngOnInit(){
        console.log("animales-componente cargado");
    }
  
}