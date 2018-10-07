import { Injectable } from'@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
//import { map } from 'rxjs/operators';
import { Observable } from'rxjs/Observable';
//para la url
import { GLOBAL } from './global';

//usamos la propiedad para inyectar datos
@Injectable()

export class UploadService{

	public url: String;

	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}

	makeFileRequest(url: string, params: Array<string>, files: Array<Files>, token: string, name: string){
		return Promise (function(resolve, reject){
			var formData: any = new FormData();
			var xhr: new XMLHttpRequest();

			for(var i=0; i< files.length; i++){
				formData.append(name, files[i], files[i].name);
			}

			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if(xhr.status == 200){
						resolve(JSON.parse(xhr.reponse));
					}else{
						reject(xhr.response);
					}
				}
			}


			xhr.open('POST', url, true);
			xhr.setRequestHeader('Authorization', token);
			xhr.send(formData);

		});
	}


}