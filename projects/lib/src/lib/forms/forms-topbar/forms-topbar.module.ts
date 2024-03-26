import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsTopbarComponent } from "./forms-topbar.component";
import { CeNavigationModule } from "@codeffekt/ce-core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { CeBarcodeModule } from "@codeffekt/ce-barcode";

@NgModule({
    declarations: [
        FormsTopbarComponent,
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
        FormsTopbarComponent,
    ]
})
export class FormsTopbarModule {

}