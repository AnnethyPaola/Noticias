import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './edit-user.component';

const routes: Routes = [
  {path:'edit-user/:id', component: EditUserComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditUserRoutingModule { }