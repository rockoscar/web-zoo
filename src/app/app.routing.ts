//modulos requeridos para el routing
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes importados para que los usen las rutas
import { TiendaComponent } from './componentes/tienda/tienda-componente';

import { AnimalesComponent } from './componentes/animales/animales-componente';
import { ContactoComponent } from './componentes/contacto/contacto-componente';
import { CuidadoresComponent } from './componentes/cuidadores/cuidadores-componente';
import { InicioComponent } from './componentes/inicio/inicio-componente';
import { RegisterComponent } from './componentes/registro/registro-componente';
import { LoginComponent } from './componentes/login/login-componente';
import { UserEditComponent } from './componentes/user-edit/user-edit-component';


//se crea una constante de tipo array donde se guardaran las rutas
const appRoutes: Routes=[
    //se van definiendo cada una de las rutas
    //cuando la ruta esta vacia abre el componente tiendacomponent
    //{path:'', component: InicioComponent},
    
    {path:'', redirectTo:'inicio', pathMatch:'full'},
    
    //cuando la ruta es tienda abre el componente
    {path:'inicio', component: InicioComponent},
    //tener cuidado con el orden de las rutas, debe ir hasta abajo el comodin **
    {path:'animales', component: AnimalesComponent},
    {path:'contacto', component: ContactoComponent},
    {path:'cuidadores', component: CuidadoresComponent},
    {path:'mis-datos', component: UserEditComponent},
    {path:'tienda', component: TiendaComponent},
    {path:'registro', component: RegisterComponent},
    {path:'login', component: LoginComponent},
    {path:'**', component: InicioComponent}
   
    
    ];
    
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);
