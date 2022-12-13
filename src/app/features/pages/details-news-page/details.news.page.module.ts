import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsNewsPageComponent } from './details-news-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
   
  ],
  exports: [],
  imports: [
    CommonModule,
    NgbCarouselModule,
    ReactiveFormsModule ,
    FormsModule,
    
  ],
  providers: [NgbCarouselConfig]
})
export class DetailsNewsPageModule { }