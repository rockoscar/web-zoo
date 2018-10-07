//importas el componente desde el core de angular
import { Component, OnInit } from '@angular/core';
//debemos declarar librearias para jquery
//declare var JQuery:any;
//declare var $:any;
//para declarar esas dependencias las ingresamos en el archivo ../src/typings.d.ts


//importamos los modulos de la nueva libreria de animaciones
import { trigger, state, style, transition, animate } from '@angular/animations';
import { fundido } from '../animaciones';

//lo mandas a llamar
@Component ({
    //nombre de como lo ingresas al html <tienda></tienda>
    selector: 'tienda',
    //le indicas donde esta el html que debe mostrar
    templateUrl: './tienda-componente.html',
    //donde esta su css
    styleUrls: ['./tienda-componente.css'] ,
    
    //agregamos la nueva propiedad para als animaciones
    animations:[
            //se le pone un nombre, marcar y el trigger quiere decir que lo activa
            trigger('marcar', [
                    //se agregan los estados, y su estilo
                    state('inactive', style({
                        border: '5px solid #ccc'
                    })),
                    state('active', style({
                        border: '5px solid yellow',
                        background: 'red',
                        borderRadius: '50px',
                        //hace grande el elemento
                        transform: 'scale(1.2)'
                    })),
                    //indicamos como queremos el cambio entre estados y la duracion y forma en que se
                    //hace la transicion
                    transition('inactive => active', animate('300ms linear')),
                    transition('active => inactive', animate('300ms linear'))
                ]),
                //agregamos la segunda animacion
                fundido
        ]
        
})

//creas una clase
export class TiendaComponent implements OnInit{
    //generas una propiedad
    public titulo;
    public nombreDelParque: string;
    //objeto creado para recibir datos del modeulo hijo
    public miParque;
    //captura el texto del editor mamalon
    public textoEditor: string;
    
    //creamos la variable para estatus del boton
    public status;
    
    //le asignas un valor a dicha priopedad
    constructor(){
        this.titulo='Esta es la tienda, desde consctructor';
        this.status='inactive';
    }
    
    //agregamos el metodo que se lanza al click del boton con status para la animacion usando angular
    cambiarEstado(status){
        if(status=='inactive'){
            this.status='active';
        }
        else{
            this.status='inactive';
        }
    }
    
    //cuando cargue el boton vamos a esperar el click para lanzar el metodo, usando jquery
    ngOnInit(){
        //comienza el metodo y oculta el texto todo usando jquery
        $('#textojq').hide();
        //se activa al click
        $('#botonjq').click(function()
        {
            //mostramos el texto con el efecto slide
            $('#textojq').slideToggle();
        });
        
        //mandamos llamar el objeto jquery y usamos su metodo ...
        $("#caja").dotdotdot({});
    }
    
    mostrarNombre(){
        console.log(this.nombreDelParque);
    }
    //metodo para pasar los datos de un evento al objeto miParque
    verDatosParque(event){
        console.log(event);
        this.miParque=event;
    }
    

        //metodo que se lanza en cada teclazo del editor mamalon
        verEditor(){
        console.log(this.textoEditor); 
    }
    
    
    
    
}