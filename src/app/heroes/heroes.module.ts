//el moddulo de ng, fundamental -> 
import { CommonModule } from "@angular/common"; // 
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.components';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    //declarations: que cosas tiene el modulo -> pipes, compoenntes, etc
    declarations: [
        HeroeComponent, 
        ListadoComponent,
    ],
    //Que cosas quiero que sean visibles fuera del mudulo -> todo esta invicible 
    //! Export -> que cosas quiero hacer visible fuera de este modulo
    exports: [
        ListadoComponent,
    ],
    //*Import solo van Modulos
    imports:[
        //ofrece directivas como el ngfor y ng if 
        CommonModule
    ]


})
export class HeroesModule{

}