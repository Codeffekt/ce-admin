import { NgModule } from "@angular/core";
import { UserEditorComponent } from "./user-editor.component";
import { CommonModule } from "@angular/common";
import { CeLayoutModule, CeNavigationModule } from "@codeffekt/ce-core";
import { UserMainInfoModule } from "../user-main-info";
import { UserProjectsOwnedModule } from "../user-projects-owned";
import { UserProjectsSharedModule } from "../user-projects-shared";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    declarations: [
        UserEditorComponent,
    ],
    imports: [
        CommonModule,
        CeNavigationModule,
        CeLayoutModule,
        UserMainInfoModule,
        UserProjectsOwnedModule,
        UserProjectsSharedModule,  
        MatIconModule,      
    ],
    exports: [
        UserEditorComponent,
    ]
})
export class UserEditorModule {    
}