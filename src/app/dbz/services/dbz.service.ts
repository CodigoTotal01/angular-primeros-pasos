import {  Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';
//indica que es una clase que se puede inyectar -> par uarlo en otros archivos 
//! cuano alguien o requiere realiza la primera instancia -> 
@Injectable()
export class DbzService{
    constructor(){
        console.log("DBZ service inicializado"); // ningun modulo lo conoce xd 
    }

    //propiedad privada -> aparte de la clase nadie lo va a usar 
    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 1500
        },
        {
          nombre: 'vegeta',
          poder: 1500
        }
      ];


      //generar un metodo que lo retorno

      get personajes(): Personaje[]{
        return [...this._personajes]; //debemos tener cuidado, js lo manda todo por refernecia -> 
        //para evitar manocearlo -> copia -> spread separa los elemntos independientes de un arreglo 
      }


      agregarPersonajes(heroe: Personaje){
        this._personajes.push(heroe);
      }

      
}