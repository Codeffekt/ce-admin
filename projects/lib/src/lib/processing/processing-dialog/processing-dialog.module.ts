import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProcessingDialogComponent } from './processing-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
    declarations: [
        ProcessingDialogComponent,
    ],
    imports: [
        CommonModule,
        MatDialogModule,
    ],
    exports: [
        ProcessingDialogComponent,
    ]
})
export class ProcessingDialogModule {
}