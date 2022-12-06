import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EconomiaComponent } from './economia.component';

const routes: Routes = [
  {path:'economia-news', component: EconomiaComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EconomiaRoutingModule { }