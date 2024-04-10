import { NgModule } from "@angular/core";
import { UserProjectsOwnedComponent } from "./user-projects-owned.component";
import { CommonModule } from "@angular/common";
import { CeFormQueryWrapperModule, CeListModule, CeSectionModule } from "@codeffekt/ce-core";

@NgModule({
    declarations: [
        UserProjectsOwnedComponent
    ],
    imports: [
        CommonModule,
        CeSectionModule,
        CeFormQueryWrapperModule,
        CeListModule
    ],
    exports: [
        UserProjectsOwnedComponent
    ]
})
export class UserProjectsOwnedModule {

}