import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModulo } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';


//crear modulo para el contador 
@NgModule({
  declarations: [
    AppComponent,
  
  ],

  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModulo,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent] //componente principal a lanzar 
})
export class AppModule { }
