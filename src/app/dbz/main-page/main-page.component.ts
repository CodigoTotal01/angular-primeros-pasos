import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface'; 
import { DbzService } from '../services/dbz.service';

//! comopenente padre

//modulo apra manejo de formularios 


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

//definir e inicializar atributos de la clase- > inyeccion de dependencia 

  nuevo: Personaje= {
    nombre : 'Maestro Toshi',
    poder: 0
  }

  //! Mediante un geter se puede obtener ingormacion de un servise 
  /*get personajes():Personaje[]{
    return this.dbzService.personajes;
  }*/

  //? usualmente se trabaja en el ciclo de vida 
  constructor(){
   
  }
  

}
