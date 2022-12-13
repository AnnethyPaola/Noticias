import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCategoriasRoutingModule } from './edit.categoria.routing.module';
import { EditCategoriaComponent } from './edit-categoria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditCategoriaComponent
  ],
  exports: [],
  imports: [
    CommonModule,  
    EditCategoriasRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
  ]
})
export class EditCategoriaModule { }