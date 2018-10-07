//importar modulos para la recacion de modulos

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//importar componentes
import { GuardarEmailComponent } from './componentes/guardar-email/guardar-email-componente';
import { MostrarEmailComponent } from './componentes/mostrar-email/mostrar-email-componente';
import { MainEmailComponent } from './componentes/main-email/main-email-componente';

//decorar el modulo para cargar componente y configuracion
@NgModule({
    //aqui van puros componentes
    declarations:[
    GuardarEmailComponent,
    MostrarEmailComponent,
    MainEmailComponent
    ],
    
    //aqui puros modulos, pero ngmodule no se debe importar
    imports: [
        CommonModule,
        FormsModule
        ],
        
    //es el componente que va exportar    
    exports: [MainEmailComponent]
    
})

//este el nombre de la clase para exportar y agregar en el app.module
export class ModuloEmailModule {}