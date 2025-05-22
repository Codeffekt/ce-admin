import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSidenavModule } from "@angular/material/sidenav";
import { CeFormEditorModule, CeGridModule } from "@codeffekt/ce-core";
import { RouterModule } from "@angular/router";

@NgModule({    
    imports: [
        CommonModule,
        RouterModule,
        CeGridModule,
        MatSidenavModule,
        CeFormEditorModule,        
    ],   
})
export class FormHomeModule {

}