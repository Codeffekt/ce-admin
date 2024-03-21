import { NgModule } from "@angular/core";
import { FormEditorJsonDialogComponent } from "./form-editor-json.component";
import { CommonModule } from "@angular/common";
import { CeCodeEditorModule } from "@codeffekt/ce-code-editor";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [
        FormEditorJsonDialogComponent,
    ],
    imports: [
        CommonModule,
        CeCodeEditorModule,
        MatDialogModule,
        MatButtonModule,
    ],
    exports: [
        FormEditorJsonDialogComponent,
    ]
})
export class FormEditorJsonModule {

}