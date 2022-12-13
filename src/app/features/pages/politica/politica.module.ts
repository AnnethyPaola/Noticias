import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliticaRoutingModule } from './politica.routing.module';
import { PoliticaComponent } from './politica.component';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PoliticaComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    PoliticaRoutingModule,
    NgbCarouselModule
  ],
  providers: [NgbCarouselConfig]

})
export class PoliticaModule { }