import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "src/app/app.component";
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
  declarations: [
    
  ],
  imports:[
    SharedModule,
    
    RouterModule,
    CommonModule
  ],

  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class HomeModule { }