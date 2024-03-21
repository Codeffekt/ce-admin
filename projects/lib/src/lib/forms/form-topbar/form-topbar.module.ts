import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormTopbarComponent } from "./form-topbar.component";
import { CeNavigationModule } from "@codeffekt/ce-core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { CeBarcodeModule } from "@codeffekt/ce-barcode";

@NgModule({
    declarations: [
        FormTopbarComponent,
    ],
    imports: [
        CommonModule,
        CeNavigationModule,
        CeBarcodeModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
    ],
    exports: [
        FormTopbarComponent,
    ]
})
export class FormTopbarModule {

}