import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntretenimientoRoutingModule } from './entretenimiento.routing.module';
import { EntretenimientoComponent } from './entretenimiento.component';
import { NgbCarouselConfig, NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    EntretenimientoComponent
  ],
  exports: [],
  imports: [
    CommonModule,  
    EntretenimientoRoutingModule,
    NgbCarouselModule,
    NgbModule
  ],
  providers: [NgbCarouselConfig]

})
export class EntretenimientoModule { }