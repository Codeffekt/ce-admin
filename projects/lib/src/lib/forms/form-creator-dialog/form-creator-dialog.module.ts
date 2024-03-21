import { NgModule } from "@angular/core";
import { FormCreatorDialogComponent } from "./form-creator-dialog.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
    declarations: [
        FormCreatorDialogComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatDialogModule,
    ],
    exports: [
        FormCreatorDialogComponent,
    ]
})
export class FormCreatorDialogModule {

}