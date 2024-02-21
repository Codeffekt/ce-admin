import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormRootNewComponent } from "./form-root-new.component";
import { CeFormsModule } from "@codeffekt/ce-core";

@NgModule({
    declarations: [
        FormRootNewComponent,
    ],
    imports: [
        CommonModule,
        CeFormsModule,
    ],
    exports: [
        FormRootNewComponent,
    ]
})
export class FormRootNewModule {    
}