import { NgModule } from "@angular/core";
import { FormSelectionDialogComponent } from "./form-selection-dialog.component";
import { CommonModule } from "@angular/common";
import { CeListModule, CeRowModule } from "@codeffekt/ce-core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
    declarations: [
        FormSelectionDialogComponent,
    ],
    imports: [
        CommonModule,
        CeListModule,
        CeRowModule,
        MatButtonModule,
        MatDialogModule,
    ],
    exports: [
        FormSelectionDialogComponent,
    ]
})
export class FormSelectionDialogModule {

}