import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriaComponent } from './list-categoria.component';

const routes: Routes = [
  {path:'list-categoria', component: ListCategoriaComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCategoriaRoutingModule { }