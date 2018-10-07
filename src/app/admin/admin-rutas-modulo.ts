import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { MainComponent } from './componentes/main/main-componente';
import { AgregarComponent } from './componentes/agregar/agregar-componente';
import { EditarComponent } from './componentes/editar/editar-componente';
import { MostrarComponent  } from './componentes/mostrar/mostrar-componente';

//creamos el arreglo de las rutas
const adminRutas: Routes = [
    {
        
        //ruta padre, queda /admin-panel y muestra el modulo principal de admin, que contiene a los componentes
        path: 'admin-panel',
        component: MainComponent,
        //se asigna una ruta hija, donde se veran los componentes dentro del modulo principal
        children: [
                //hacemos unn redirecionamiento para que cuando este vacio el /admin-panel/ muestre la ruta hija 
                //mostrar
                { path: '', redirectTo: 'mostrar', pathMatch: 'full' },
                //rutas hijas
                { path: 'mostrar', component: MostrarComponent },
                { path: 'editar', component: EditarComponent },
                { path: 'agregar', component: AgregarComponent }
            ]
    },
    //creamos otra ruta (que tambien podria tener rutas hijas)
    { path: 'mostrar-del-panel  ', component: MostrarComponent }
    ];
    
@NgModule({
    imports: [
        RouterModule.forChild(adminRutas)
        ],
    exports: [
            RouterModule
        ]
})

export class AdminRutasModulo {}