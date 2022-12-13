import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaludRoutingModule } from './salud.routing.module';
import { SaludComponent } from './salud.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SaludComponent
  ],
  exports: [],
  imports: [
    CommonModule,  
    SaludRoutingModule,
    NgbCarouselModule
  ]
})
export class SaludModule { }