import { NgModule } from "@angular/core";
import { UserCreationComponent } from "./user-creation.component";
import { CommonModule } from "@angular/common";
import { CeNavigationModule } from "@codeffekt/ce-core";
import { UserCreationInfoModule } from "../user-creation-info";

@NgModule({
    declarations: [
        UserCreationComponent
    ],
    imports: [
        CommonModule,
        CeNavigationModule,
        UserCreationInfoModule,
    ],
    exports: [
        UserCreationComponent
    ]
})
export class UserCreationModule {
}