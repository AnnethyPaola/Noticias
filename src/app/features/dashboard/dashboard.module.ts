import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from "src/app/app.component";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { AddUserComponent } from "./add-user/add-user.component";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRountingModule } from "./dashboard.roouting.module";

@NgModule({
  declarations: [
    DashboardComponent,
   

  ],
  imports:[
    SharedModule,
    RouterModule,
    DashboardRountingModule,
    CoreModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class DashboardModule { }