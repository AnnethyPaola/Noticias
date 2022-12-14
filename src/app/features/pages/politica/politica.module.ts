import { CommonModule } from '@angular/common';
import { PoliticaRoutingModule } from './politica.routing.module';
import { PoliticaComponent } from './politica.component';
import { NgbCarouselConfig, NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    PoliticaComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    PoliticaRoutingModule,
    NgbCarouselModule,
    NgbModule
  ],
  providers: [NgbCarouselConfig]

})
export class PoliticaModule { }