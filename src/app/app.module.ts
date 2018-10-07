//estos son del sistema

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//se importa para editor de texto word y se agrega a los imports
import { EditorModule } from '@tinymce/tinymce-angular';

//clases para el routing creadas en el app.routing
import { routing, appRoutingProviders } from './app.routing';
//se importar modulo para las animaciones, recuerda llevarlo al imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//importamos el modulo creado
import { ModuloEmailModule } from './moduloemail/moduloemail-modules';
//agregamos nuevo modulo, recuerda llevarlo al imports
import { AdminModulo } from './admin/admin-modulo';


//componentes
//importas la clase del componente TiendaComoponent


import { AppComponent } from './app.component';
import { SimpleTinyComponent } from './componentes/simple-tiny/simple-tiny-componente';
import { ParquesComponent } from './componentes/parques/parques-componente';
import { TiendaComponent } from './componentes/tienda/tienda-componente';
import { AnimalesComponent } from './componentes/animales/animales-componente';
import { ContactoComponent } from './componentes/contacto/contacto-componente';
import { CuidadoresComponent } from './componentes/cuidadores/cuidadores-componente';
import { InicioComponent } from './componentes/inicio/inicio-componente';
import { RegisterComponent } from './componentes/registro/registro-componente';
import { LoginComponent } from './componentes/login/login-componente';
import { UserEditComponent } from './componentes/user-edit/user-edit-component';

//servicios
//se pueden agregar de forma global los servicios y debes llamarlos en el providers de mas abajo
//import { UserService } from'./servicios/usuario-servicios';

@NgModule({
  declarations: [
    AppComponent,
    //la declaras 
    TiendaComponent,
    ParquesComponent,
    AnimalesComponent,
    ContactoComponent,
    CuidadoresComponent,
    InicioComponent,
    SimpleTinyComponent,
    RegisterComponent,
    LoginComponent,
    UserEditComponent
  ],
  //se deben agregar los modulos del sistema
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    //modulo de animaciones
    BrowserAnimationsModule,
    //para el editor mamalon
    EditorModule,
    //agregamos el modulo creado desde cero moduloemail
    ModuloEmailModule,
    //importamos el nuevo modulo
    AdminModulo
  ],
  providers: [
    //proveedor de las rutas
    appRoutingProviders
    ],
  //le dices con que componente iniciar
  bootstrap: [AppComponent]
})
export class AppModule { }
