import { NgModule } from "@angular/core";
import { UserActionsComponent } from "./user-actions.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        UserActionsComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        UserActionsComponent,
    ]
})
export class UserActionsModule {

}