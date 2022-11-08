  //templetate -> literal -> es para añadir html duro
 // template: '<h1>Hola desde template D:</h1>',

 //! el undifine  es un string vacio para angular 
import { Component } from '@angular/core';
//minimo el selector y el templateUrl

@Component({
  selector: 'app-root', // nombre del componente -> inyectado en el html global 
  templateUrl: './app.component.html', //sera usado por el componente
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = "Contador App";
  numero : number = 10;
  base: number = 5;
  acumular(valor: number): void{
    this.numero+=valor; 
  }


}
