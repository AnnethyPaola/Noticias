import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntretenimientoRoutingModule } from './entretenimiento.routing.module';
import { EntretenimientoComponent } from './entretenimiento.component';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    EntretenimientoComponent
  ],
  exports: [],
  imports: [
    CommonModule,  
    EntretenimientoRoutingModule,
    NgbCarouselModule
  ],
  providers: [NgbCarouselConfig]

})
export class EntretenimientoModule { }