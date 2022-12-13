import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialRoutingModule } from './social.routing.module';
import { SocialComponent } from './social.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SocialComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SocialRoutingModule,
    NgbCarouselModule
  ]
})
export class SocialModule { }