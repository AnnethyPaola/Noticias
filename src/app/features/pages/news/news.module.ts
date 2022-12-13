import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news.routing.module';
import { NewsComponent } from './news.component';
import { NgbCarouselConfig, NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    NewsComponent,
  ],
  exports: [],
  imports: [
    CommonModule,  
    NewsRoutingModule,
    NgbCarouselModule,
    NgbModule
  ],
  providers: [NgbCarouselConfig]

})
export class NewsModule { }