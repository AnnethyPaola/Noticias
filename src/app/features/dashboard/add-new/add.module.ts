import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewsRoutingModule } from './add.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewComponent } from './add-new.component';

@NgModule({
  declarations: [
    AddNewComponent,
  ],
  exports: [],
  imports: [
    CommonModule,  
    AddNewsRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
  ]
})
export class AddNewsModule { }