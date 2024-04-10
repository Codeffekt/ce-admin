import { NgModule } from "@angular/core";
import { UsersComponent } from "./users.component";
import { CommonModule } from "@angular/common";
import { CeFormQueryWrapperModule, CeListModule, CeNavigationModule, CeNgReallyModule } from "@codeffekt/ce-core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
    declarations: [
        UsersComponent
    ],
    imports: [
        CommonModule,
        CeNavigationModule,
        MatButtonModule,
        MatIconModule,
        CeFormQueryWrapperModule,
        CeListModule,
        CeNgReallyModule,
        MatTooltipModule,
    ],
    exports: [
        UsersComponent
    ]
})
export class UsersModule {

}