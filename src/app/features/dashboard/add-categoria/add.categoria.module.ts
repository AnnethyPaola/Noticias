import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoriaRoutingModule } from './add.categoria.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCategoriaComponent } from './add-categoria.component';

@NgModule({
  declarations: [
    AddCategoriaComponent
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