import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelsinkiFeladatComponent } from './helsinki-feladat/helsinki-feladat.component';
import { ImportalasComponent } from './importalas/importalas.component';

const routes: Routes = [
  { path: 'kekturaimport', component: ImportalasComponent },
  { path: 'helsinkifeladat', component: HelsinkiFeladatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
