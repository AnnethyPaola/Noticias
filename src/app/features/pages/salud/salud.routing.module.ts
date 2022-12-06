import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaludComponent } from './salud.component';

const routes: Routes = [
  {path:'salud-news', component: SaludComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaludRoutingModule { }