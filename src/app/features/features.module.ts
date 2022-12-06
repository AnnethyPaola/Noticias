import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AuthModule } from "./auth/auth.module";
import { AuthRoutingModule } from "./auth/auth.routing.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { FeatureRoutingModule } from "./features.routing.module";
import { PagesModule } from "./pages/pages.module";

@NgModule({
    declarations: [      
    ],

    imports: [
        CommonModule,
        FeatureRoutingModule,
        RouterModule,
        SharedModule,
        PagesModule,
        DashboardModule,
       
    ]
})

export class FeaturesModule {}