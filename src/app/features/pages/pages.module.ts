import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "src/app/app.component";
import { SharedModule } from "src/app/shared/shared.module";
import { DetailsNewComponent } from "../dashboard/details-new/details-new.component";
import { DetailsNewsPageComponent } from "./details-news-page/details-news-page.component";
import { DetailsNewsPageModule } from "./details-news-page/details.news.page.module";
import { HomeComponent } from "./home/home.component";
import { PagesComponent } from "./pages.component";
import { PagesRountingModule } from "./pages.routing.module";

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    DetailsNewsPageComponent
  ],
  imports:[
    SharedModule,
    PagesRountingModule,
    RouterModule,
    CommonModule,
    NgbCarouselModule,
    DetailsNewsPageModule,
    
  ],

  exports:[
    PagesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class PagesModule { }