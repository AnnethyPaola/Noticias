import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnologiaComponent } from './tecnologia.component';

const routes: Routes = [
  {path:'tecnologia-news', component: TecnologiaComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TecnologiaRoutingModule { }