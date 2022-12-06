import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoriaRoutingModule } from './add.categoria.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  exports: [],
  imports: [
    CommonModule,  
    AddCategoriaRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
  ]
})
export class AddCategoriaModule { }