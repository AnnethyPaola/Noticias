import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbCarouselConfig, NgbCarouselModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "src/app/app.component";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeComponent } from "./home.component";


@NgModule({
  declarations: [
  
  ],
  imports:[
    SharedModule,
    RouterModule,
    CommonModule,
    
  ],

  exports:[
    
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class HomeModule { }