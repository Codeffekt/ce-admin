import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { FormToolbarComponent } from "./form-toolbar.component";
import { MatDialogModule } from "@angular/material/dialog";
import { CeBarcodeModule } from "@codeffekt/ce-barcode";

@NgModule({
    declarations: [
        FormToolbarComponent,
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        CeBarcodeModule,
    ],
    exports: [
        FormToolbarComponent,
    ]    
})
export class FormToolbarModule {

}