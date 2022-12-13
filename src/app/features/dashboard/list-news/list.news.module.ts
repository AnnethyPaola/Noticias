import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListNewsRoutingModule } from './list.news.routing.module';
import { ListNewsComponent } from './list-news.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ListNewsComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    ListNewsRoutingModule,
    NgbModule
  ]
})
export class ListNewsModule { }