import { NgModule } from "@angular/core";
import { FormUsersSharedComponent } from "./form-users-shared.component";
import { CommonModule } from "@angular/common";
import { CeListModule, CeNgReallyModule } from "@codeffekt/ce-core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
    declarations: [
        FormUsersSharedComponent,
    ],
    imports: [
        CommonModule,
        CeListModule,
        MatButtonModule,
        CeNgReallyModule,
        MatMenuModule,
    ],
    providers: [

    ],
    exports: [
        FormUsersSharedComponent
    ]
})
export class FormUsersSharedModule {

}