import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNewsComponent } from './list-news.component';

const routes: Routes = [
  {path:'list-news', component: ListNewsComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListNewsRoutingModule { }