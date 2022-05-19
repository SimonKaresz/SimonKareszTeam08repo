import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportalasComponent } from './importalas/importalas.component';
import { HelsinkiFeladatComponent } from './helsinki-feladat/helsinki-feladat.component';

@NgModule({
  declarations: [
    AppComponent,
    ImportalasComponent,
    HelsinkiFeladatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
