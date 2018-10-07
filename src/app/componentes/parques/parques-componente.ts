//importas el componente desde el core de angular
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

//lo mandas a llamar
@Component ({
    //nombre de como lo ingresas al html <tienda></tienda>
    selector: 'parques',
    //le indicas donde esta el html que debe mostrar
    templateUrl: './parques-componente.html',
  
})

//creas una clase
//depues de importar se debe indicar en la clase implements onchange
//On Init metodo cada que carga la directiva en la plantilla
//DoCheck cuando se realiza algun cambio en el componente para comprobar informacion
//OnDestroy se ejecuta antes de borrar componente o directiva
export class ParquesComponent implements OnChanges, OnInit, OnDestroy {
    //generas una propiedad
    @Input() nombre: string ;
    @Input('metros-cuadrados') metros: number ;
    public vegetacion: string;
    public abierto: boolean;
    
    //se crea el output y se hace un creado de eventos new eventmitter
    @Output () pasameLosDatos= new EventEmitter();
    
    
    //le asignas un valor a dicha priopedad
    constructor(){
        this.nombre='Esta es la tienda, desde consctructor';
        this.metros=450;
        this.vegetacion='Alta';
        this.abierto=false;
    }
    
    //ahora podemos usar el metodo, que se lanza cuando se modifica alguna propiedad del modulo
    ngOnChanges(changes: SimpleChanges){
        //manda a consola cada cambio
        //console.log(changes);
        //solo manda mensaje fijo
        console.log("Existen cambios");
    }
    
    //manda mensaje cuando se carga la directiva
    ngOnInit(){
        console.log("inicio componente");
    }
    
    /*se hace el metodo que va estar en la espera de cambios
    se  llevo a app component
    ngDoCheck(){
        console.log("se ejecuto el docheck");
    }
    */
    
    //se ejecuta antes de eliminar un componente/directiva se puede usar para restablecer variables
    //o cualquier accion antes de eliminar informacion
    ngOnDestroy(){
        console.log('Se va eliminar el componente');
    }
    
    //metodo que manda los datos al output
    emitirEvento(){
        this.pasameLosDatos.emit({
            //va primero el nombre dentro la pasarela de los datos 'nombre'
            //y le asigna una variable this.nombre
          'nombre':  this.nombre,
        'metros': this.metros,
        'vegetacion': this.vegetacion,
        'abierto': this.abierto
        })
    }
}