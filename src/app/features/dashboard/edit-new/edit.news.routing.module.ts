import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditNewComponent } from './edit-new.component';

const routes: Routes = [
  {path:'edit-news/:id', component: EditNewComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditNewsRoutingModule { }