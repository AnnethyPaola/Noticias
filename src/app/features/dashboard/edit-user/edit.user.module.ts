import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserRoutingModule } from './edit.user.routing.module';
import { EditUserComponent } from './edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditUserComponent
  ],
  exports: [],
  imports: [
    CommonModule,  
    EditUserRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
  ]
})
export class EditUserModule { }