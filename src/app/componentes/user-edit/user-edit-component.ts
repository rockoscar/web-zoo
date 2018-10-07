import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
//importamos la clase del modelo
import { User } from '../../modelos/usuario';

import { GLOBAL } from '../../servicios/global';
//exporta la clase del servicio usuarios
import { UserService } from'../../servicios/usuario-servicios';

@Component({
	selector: 'user-edit',
	templateUrl: './user-edit-component.html',
	//dependeica del servicio
	providers: [UserService]
})

export class UserEditComponent implements OnInit {
	public title: String;
	public user: User;
	public identity;
	public token;
	public status;

	constructor (
			//objeto del servicio
			private _userService: UserService
		){
			this.title = 'Actualiza mis datos';
			//obtenemos los datos del local usando su metodo
			this.identity = _userService.getIdentity();
			this.token = _userService.getToken();
			this.user = this.identity;
	}

	ngOnInit(){
		console.log('Se ha cargado el user edit');
		//console.log(this.user);
		//console.log(this.token);
	}

	onSubmit(){
		//usamos el servicio de actualizacion con le objeto user
        this._userService.updateUser(this.user).subscribe(
        		response =>{
        			if(!response.usuario){
        				this.status ='error';
        			}else{
        				//console.log(response.usuario);
        				//cargamos en local los datos del objeto, antes lo convertimos en un json
        				localStorage.setItem('identity', JSON.stringify(this.user));
        				this.status='exitoso'
        			}

        			//subida de image
        		},
        		error => {
        			var errorMensaje = <any>error;
        			if(errorMensaje != null){
        				this.status ='error';
        			}
        		}
        	);
    }
}
