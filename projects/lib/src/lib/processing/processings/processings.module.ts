import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProcessingsComponent } from "./processings.component";
import { CeFormQueryWrapperModule, CeListModule, CeNavigationModule, CeNgReallyModule } from "@codeffekt/ce-core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
    declarations: [
        ProcessingsComponent,
    ],
    imports: [
        CommonModule,
        CeNavigationModule,
        CeFormQueryWrapperModule,
        CeListModule,
        CeNgReallyModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
    ],
    exports: [
        ProcessingsComponent,
    ]
})
export class ProcessingsModule {

}