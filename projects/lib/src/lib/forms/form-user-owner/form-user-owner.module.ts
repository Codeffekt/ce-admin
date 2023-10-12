import { NgModule } from "@angular/core";
import { FormUserOwnerComponent } from "./form-user-owner.component";
import { CommonModule } from "@angular/common";
import { CeListModule } from "@codeffekt/ce-core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

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