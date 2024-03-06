import { NgModule } from "@angular/core";
import { FormUsersSharedComponent } from "./form-users-shared.component";
import { CommonModule } from "@angular/common";
import { CeListModule, CeNgReallyModule } from "@codeffekt/ce-core";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyMenuModule as MatMenuModule } from "@angular/material/legacy-menu";

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