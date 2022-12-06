import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { MenuAdminComponent } from "./menu-admin/menu-admin.component";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
    declarations: [
        MenuComponent,
        MenuAdminComponent,
        FooterComponent

    ],
    exports: [
        MenuComponent,
        MenuAdminComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,

    ]
})

export class SharedModule { }