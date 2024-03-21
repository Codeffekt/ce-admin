import { NgModule } from "@angular/core";
import { CeAdminMainMenuComponent } from "./main-menu.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        CeAdminMainMenuComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        CeAdminMainMenuComponent,
    ]
})
export class CeAdminMainMenuModule {

}