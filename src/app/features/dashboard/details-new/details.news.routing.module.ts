import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsNewComponent } from './details-new.component';

const routes: Routes = [
  {path:'details-news/:id', component: DetailsNewComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsNewsRoutingModule { }