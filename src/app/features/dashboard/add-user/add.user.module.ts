import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserRoutingModule } from './add.user.routing.module';
import { AddUserComponent } from './add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddUserComponent
  ],
  exports: [],
  imports: [
    CommonModule,  
    AddUserRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
  ]
})
export class AddUserModule { }