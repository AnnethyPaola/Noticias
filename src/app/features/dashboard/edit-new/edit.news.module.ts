import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditNewsRoutingModule } from './edit.news.routing.module';
import { EditNewComponent } from './edit-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditNewComponent
  ],
  exports: [],
  imports: [
    CommonModule,  
    EditNewsRoutingModule,
    ReactiveFormsModule ,
    FormsModule
  ]
})
export class EditNewsModule { }