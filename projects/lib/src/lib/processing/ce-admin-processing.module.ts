import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CeAdminProcessingRoutingModule } from "./ce-admin-processing-routing.module";
import { ProcessingsModule } from "./processings/processings.module";
import { MainHomeModule } from "../main/main-home/main-home.module";
import { ProcessingModule } from "./processing";

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        CeAdminProcessingRoutingModule,
        ProcessingsModule,
        ProcessingModule,
        MainHomeModule,
    ],
    exports: [
    ]
})
export class CeAdminProcessingModule {

}