import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeladatComponent } from './feladat/feladat.component';
import { MintaComponent } from './minta/minta.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  { path: 'minta', component: MintaComponent },
  { path: 'feladat', component: FeladatComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: '', redirectTo: '/minta', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
