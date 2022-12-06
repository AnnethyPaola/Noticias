import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsNewsRoutingModule } from './details.news.routing.module';
import { DetailsNewComponent } from './details-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DetailsNewComponent
  ],
  exports: [],
  imports: [
    CommonModule,  
    DetailsNewsRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
  ]
})
export class DetailsNewsModule { }