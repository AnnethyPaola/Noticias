import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCategoriaComponent } from './edit-categoria.component';

const routes: Routes = [
  {path:'edit-categoria/:id', component: EditCategoriaComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditCategoriasRoutingModule { }