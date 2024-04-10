import { NgModule } from "@angular/core";
import { UserTopbarComponent } from "./user-topbar.component";
import { CommonModule } from "@angular/common";
import { CeNavigationModule } from "@codeffekt/ce-core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
    declarations: [
        UserTopbarComponent
    ],
    imports: [
        CommonModule,
        CeNavigationModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
    ],
    exports: [
        UserTopbarComponent
    ]
})
export class UserTopbarModule {

}