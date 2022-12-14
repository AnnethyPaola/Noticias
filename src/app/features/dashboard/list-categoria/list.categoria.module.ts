import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoriaRoutingModule } from './list.categoria.routing.module';
import { ListCategoriaComponent } from './list-categoria.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ListCategoriaComponent
  ],
  exports: [],
  imports: [
    CommonModule,  
    ListCategoriaRoutingModule,
    NgbModule
  ]
})
export class ListCategoriaModule { }