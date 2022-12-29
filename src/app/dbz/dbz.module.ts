import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';

import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';



@NgModule({
  //Modulo basi
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],exports:[
    MainPageComponent
  ],
  imports: [
    //cuando importas un mdulo no es que se importe dos beces al ser encapsulado usara el mismo 
    CommonModule, 
    FormsModule
  ],
  //todos los servicios funcionan como singleton
  providers:[
      DbzService
  ]
})
export class DbzModule { }
