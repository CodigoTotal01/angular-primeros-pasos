import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.components.html'
})
export class HeroeComponent {
    nombre: string = "Ironman";
    edad: number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }
    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }


    //! Enlazado en una sola via, las propiedades estan enlazadasde una unica manera con esa priedad -> si cambia en el compoennte -> se cmbbia en la vista -> pero no se recomienda cuando son varios? xd  :0
    //canmbio el nombre del atributo y esto se vio reflejado en la vista 
    cambiarNombre(): void{
        this.nombre = "Spiderman";
    }
    //solo cambia lo que tiene que cambiar, pero nada cambia cuanod ya se ejecuto un metodo 
    cambiarEdad(): void{
        this.edad = 30;
    }
}