import { NgModule } from "@angular/core";
import { FormHomeComponent } from "./form-home.component";
import { CommonModule } from "@angular/common";
import { MatSidenavModule } from "@angular/material/sidenav";
import { CeFormEditorModule, CeGridModule } from "@codeffekt/ce-core";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        FormHomeComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        CeGridModule,
        MatSidenavModule,
        CeFormEditorModule,        
    ],
    exports: [
        FormHomeComponent,
    ]
})
export class FormHomeModule {

}