import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProcessingComponent } from './processing.component';
import {
    CeFormModule, CeFormsPipesModule,
    CeGridModule, CeNavigationModule,
    CeRowModule
} from "@codeffekt/ce-core";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { ProcessingDialogModule } from "../processing-dialog";

@NgModule({
    declarations: [
        ProcessingComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        CeNavigationModule,
        CeFormsPipesModule,
        CeRowModule,
        CeGridModule,
        CeFormModule,        
        MatButtonModule,
        ProcessingDialogModule,
    ],
    exports: [
        ProcessingComponent,
    ]
})
export class ProcessingModule {

}