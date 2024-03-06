import { NgModule } from "@angular/core";
import { FormUserOwnerComponent } from "./form-user-owner.component";
import { CommonModule } from "@angular/common";
import { CeListModule } from "@codeffekt/ce-core";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyMenuModule as MatMenuModule } from "@angular/material/legacy-menu";

@NgModule({
    declarations: [
        FormUserOwnerComponent,
    ],
    imports: [
        CommonModule,
        CeListModule,
        MatButtonModule,
        MatMenuModule,
    ],
    providers: [

    ],
    exports: [
        FormUserOwnerComponent,
    ]
})
export class FormUserOwnerModule {

}