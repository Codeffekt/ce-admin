import { NgModule } from "@angular/core";
import { MainMenuComponent } from "./main-menu.component";
import { CommonModule } from "@angular/common";
import { CeSideMenuModule } from "@codeffekt/ce-core";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        MainMenuComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        CeSideMenuModule,
    ],
    exports: [
        MainMenuComponent,
    ]
})
export class MainMenuModule {
    
}