import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

//import { UserService } from'../../servicios/usario-servicios';

import { UserService } from'../../servicios/usuario-servicios';

import { User } from '../../modelos/usuario';

@Component({
    selector: 'login',
    templateUrl: './login-componente.html',
    providers: [UserService]
})

export class LoginComponent {
    public titulo: String;
    public user: User;
    public identity;
    public token;
    public status: String;
    
    constructor(
            //crean las variables de las rutas
            private _route: ActivatedRoute,
            private _router: Router,
            private _userService: UserService
            
        ){
            this.titulo='Identificate';
            this.user= new User ('', '', '', '','','ROLE_USER','');
        }
        
    ngOnInit(){
        console.log('login componente cargado');
    }
    onSubmit(){
        //console.log(this.user);
        //logear el usuario y obtener el objeto
        this._userService.signup(this.user).subscribe (
            response => {
                this.identity = response.usuariob;
                //this.identity.password ='';
                localStorage.setItem('identity', JSON.stringify(this.identity));
                console.log(this.identity);
                //valida que exista el objeto y que tenga un id
                if(!this.identity || !this.identity._id){
                    
                    alert('El usuario no se ha logeado correctamente');
                }else{
                    //mostrar el identity
                                console.log(this.identity);

                        //conseguir el tokken
                        //llamamos al servicio ahora con el parametro para obtener el token true
                        this._userService.signup(this.user, 'true').subscribe (
                            response => {
                                this.token = response.token;
                                //validamos el token
                            if(this.token.length <= 0){
                                alert('El token no se ha generado correctamente');
                            }else{
                                //mostrar el token
                                //console.log(this.token);
                                localStorage.setItem('token', this.token);
                                this.status='success';

                                this._router.navigate(['/']);

                            }
                        },
                        error =>{
                            console.log(<any>error);

                            

                        }
                    );
                }
            },
            //en caso de falle el logeo
            error =>{
                var errorMessage = <any>error;
                if(errorMessage !=  null){
                    var body = JSON.parse(error._body);
                    this.status='error';
                }
                
            }
        );
    }
} 