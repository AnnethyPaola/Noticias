import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EconomiaRoutingModule } from './economia.routing.module';
import { EconomiaComponent } from './economia.component';
import { NgbCarouselConfig, NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    EconomiaComponent
  ],
  exports: [],
  imports: [
    CommonModule,  
    EconomiaRoutingModule,
    NgbCarouselModule,
    NgbModule
  ],
  providers: [NgbCarouselConfig]
})
export class EconomiaModule { }