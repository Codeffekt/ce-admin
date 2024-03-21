import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainHomeComponent } from "./main-home.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { RouterModule } from "@angular/router";
import { CeAdminMainMenuModule } from "../main-menu/main-menu.module";

@NgModule({
    declarations: [
        MainHomeComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatSidenavModule,
        CeAdminMainMenuModule,
    ],
    exports: [
        MainHomeComponent,
    ]
})
export class MainHomeModule {    
}