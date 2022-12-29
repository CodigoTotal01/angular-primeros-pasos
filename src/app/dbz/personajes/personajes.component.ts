//! Componente hijo 
import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

interface Personaje{
  nombre: string,

  poder: number
}

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})

export class PersonajesComponent  { 
  //! quie nlo use podemos enviar el personajes 
  //@Input() // nombre de la propiedad seteado ->
  //personajes: Personaje[] = []; // poner el tipado simpre 
  //! Lugar centralizado, inteligente porque no lo importara dos veces si ya se añadio 
  constructor(private dbzService: DbzService){}

  get personajes(){
    return this.dbzService.personajes;
  }
}
