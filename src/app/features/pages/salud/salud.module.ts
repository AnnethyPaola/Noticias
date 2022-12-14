import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaludRoutingModule } from './salud.routing.module';
import { SaludComponent } from './salud.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SaludComponent
  ],
  exports: [],
  imports: [
    CommonModule,  
    SaludRoutingModule,
    NgbCarouselModule,
    NgbModule
  ]
})
export class SaludModule { }