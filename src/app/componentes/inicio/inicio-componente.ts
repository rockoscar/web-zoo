import { Component, OnInit } from '@angular/core';
//expotarmos la vairable donde incluye la animacion
import { fundido } from '../animaciones';

@Component({
  selector: 'inicio',
  templateUrl: './inicio-componente.html',
  //la declaramos en el componente y queda lista para usarla en el html
  animations: [ fundido ]
  
})
export class InicioComponent implements OnInit {
  title = 'Bienvenido a Zoo OCB';
  
  ngOnInit(){
        console.log("inicio-componente cargado");
    }
  
}