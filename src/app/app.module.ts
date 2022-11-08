import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModulo } from './contador/contador.module';


//crear modulo para el contador 
@NgModule({
  declarations: [
    AppComponent,
  
  ],

  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModulo
  ],
  providers: [],
  bootstrap: [AppComponent] //componente principal a lanzar 
})
export class AppModule { }
