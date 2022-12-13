import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecnologiaRoutingModule } from './tecnologia.routing.module';
import { TecnologiaComponent } from './tecnologia.component';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    TecnologiaComponent
  ],
  exports: [],
  imports: [
    CommonModule,  
    TecnologiaRoutingModule,
    NgbCarouselModule
  ],
  providers: [NgbCarouselConfig]
})
export class TecnologiaModule { }