import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EletciklusComponent } from './eletciklus/eletciklus.component';
import { JqueryComponent } from './jquery/jquery.component';
import { TablaComponent } from './tabla/tabla.component';
import { UrlapComponent } from './urlap/urlap.component';

const routes: Routes = [
  { path: 'jquery', component: JqueryComponent },
  { path: 'tabla', component: TablaComponent },
  { path: 'eletciklus', component: EletciklusComponent },
  { path: 'urlap', component: UrlapComponent },
  { path: '**', component: UrlapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
