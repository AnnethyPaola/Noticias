import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "src/app/app.component";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeComponent } from "./home/home.component";
import { PagesComponent } from "./pages.component";
import { PagesRountingModule } from "./pages.routing.module";

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent
  ],
  imports:[
    SharedModule,
    PagesRountingModule,
    RouterModule,
    CommonModule
  ],

  exports:[
    PagesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class PagesModule { }