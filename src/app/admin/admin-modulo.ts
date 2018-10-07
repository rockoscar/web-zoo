//modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModules } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRutasModulo } from './admin-rutas-modulo';

//componentes
import { MainComponent } from './componentes/main/main-componente';
import { AgregarComponent } from './componentes/agregar/agregar-componente';
import { EditarComponent } from './componentes/editar/editar-componente';
import { MostrarComponent  } from './componentes/mostrar/mostrar-componente';

@NgModule({
    
    //se declaran componentes que usara el modulo
    declarations: [
            MainComponent,
            AgregarComponent,
            EditarComponent,
            MostrarComponent
        ],
    //importamos los modulos, se quito el fomrs por que causaba error. Creo por que todavia no se usaba
    imports: [
            CommonModule,
            //FormsModules,
            HttpModule,
            AdminRutasModulo
        ],
    
    //son los componentes o modulos que puedes usar fuera de este modulo
    //segun no es necesario para esta app
    exports: [
            MainComponent,
            AgregarComponent,
            EditarComponent,
            MostrarComponent,
            //FormsModules
        ],
        
    providers: []
})
export class AdminModulo { }


