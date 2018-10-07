//importamos los elementos requeridos para la animacion
import { animate, state, style, transition, trigger } from '@angular/animations';

//exportamos la variable que contiene la animacion
export const fundido =
        //la damos nombre
        trigger('fundido', [
                        //indicamos en que cualquier estado * 
                        state('*', style({
                            opacity: 1
                        })),
                        //indicamos que cuando comience :enter tengo cierta propiedad
                        //que aparezca, se podria usar solo esta seccion y funciona igual
                        transition(':enter', [
                                style({
                                    opacity: 0,
                                    /*para darle vuelta y que salga desde arriba tipo powerpoint
                                    pero no lo usaremos por le momento
                                    transform: 'translateY(-30%)',
                                    transform: 'rotate(150deg)'
                                    */
                                    
                                }),
                                animate('300ms linear', style({
                                    opacity: 1,
                                    /*para darle vuelta y que salga desde arriba tipo powerpoint
                                    pero no lo usaremos por el momento
                                    transform: 'translateY(0)',
                                    transform: 'rotate(0deg)'
                                    */
                                    
                                }))
                            ]),
                        //efecto para cuando vaya de salida :leave y cambie su estilo
                        transition(':leave', [
                                animate('500ms linear', style({
                                    opacity: 0
                                }))
                            ])
                    ]);
