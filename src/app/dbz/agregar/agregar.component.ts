import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {
  //inyectando servicio -> siempre como privado de la clase 
constructor(private dbzService: DbzService){

}

  //recivira una lista de personajes 

  @Input()
  nuevo: Personaje = {nombre: "", poder: 0}
  
  ///emitir un valor pero al padre
  //simpre debemos especificar el tipo 
 // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  agregar( ){
      if(this.nuevo.nombre.trim().length === 0){
        return;
      }

      this.dbzService.agregarPersonajes(this.nuevo);

      console.log(this.nuevo);
      //this.onNuevoPersonaje.emit(this.nuevo);
      this.nuevo = {nombre: '', poder: 0};
    
  }




}
