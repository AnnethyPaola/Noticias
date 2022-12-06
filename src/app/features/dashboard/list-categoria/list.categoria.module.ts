import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoriaRoutingModule } from './list.categoria.routing.module';
import { ListCategoriaComponent } from './list-categoria.component';

@NgModule({
  declarations: [
    ListCategoriaComponent
  ],
  exports: [],
  imports: [
    CommonModule,  
    ListCategoriaRoutingModule
  ]
})
export class ListCategoriaModule { }