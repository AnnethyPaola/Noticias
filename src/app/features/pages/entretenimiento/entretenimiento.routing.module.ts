import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntretenimientoComponent } from './entretenimiento.component';

const routes: Routes = [
  {path:'entretenimiento-news', component: EntretenimientoComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntretenimientoRoutingModule { }