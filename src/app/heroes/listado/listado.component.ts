import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

//?Primer ciclo de vida
export class ListadoComponent  {

  heroesBorrados: string[]=[];
  heroes: string[] = ["spiderman", "ironma", "Thor"];

  borrarHeroe(): void{
    //elkimna el ultimo elemento de un arreglo 
    let heroeBorrado;
    heroeBorrado = this.heroes.shift() || " ";
    if(!(heroeBorrado == " ")){
      this.heroesBorrados.push(heroeBorrado)
    }
  
  }

  //! Modulos -> mudlo pringipal -> contiene los comopenntes.ts -> 
  //Objetibo -> enpacsular las cosas y ayudar con la carga perezosa -> wow -> para que cargar algo de los compoennetes i no lo usa la paersona 
  // carepeta que agrupe los elementos entre si 

}
