import { Component, OnInit } from '@angular/core';
import { fundido } from '../animaciones';

@Component({
  selector: 'cuidadores',
  templateUrl: './cuidadores-componente.html',
  animations: [ fundido ]
  
})
export class CuidadoresComponent implements OnInit {
  title = 'Cuidadores';
  
  ngOnInit(){
        console.log("cuidadores-componente cargado");
    }
  
}