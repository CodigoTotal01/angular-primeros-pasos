import { Component } from '@angular/core';

//! Cannot GET/ error grave - > angular no puede compilar la applicacion
//?emplear en un modulo 
@Component({
    selector: "app-contador", //para indicar que es personalizado
    
    template: ` 
    <!-- template de este elemento  -->
            <!--sirve para cualquier expresion de js, se hace referencia ala clase del compoennte asociado  -->
        <h1>{{title}}</h1>
        <h3> La base es: <strong>{{base}}</strong></h3>
        <button (click)="acumular(base)">+ {{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base);">- {{base}}</button>
            
    `,
})

//decorador -> para convertir la clase en un compoentne 
export class ContadorComponent {
    public title: string = "Contador App";
    numero : number = 10;
    base: number = 5;
    acumular(valor: number): void{
      this.numero+=valor; 
    }
  
}