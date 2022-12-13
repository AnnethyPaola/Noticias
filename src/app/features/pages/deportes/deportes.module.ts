import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeportesRoutingModule } from './deportes.routing.module';
import { RouterModule } from '@angular/router';
import { DeportesComponent } from './deportes.component';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DeportesComponent,
  ],
  exports: [],
  imports: [
    CommonModule,  
    DeportesRoutingModule,
    RouterModule,
    NgbCarouselModule
  ],
  providers: [NgbCarouselConfig]
})
export class DeportesModule { }