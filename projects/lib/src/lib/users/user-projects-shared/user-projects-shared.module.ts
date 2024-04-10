import { NgModule } from "@angular/core";
import { UserProjectsSharedComponent } from "./user-projects-shared.component";
import { CommonModule } from "@angular/common";
import { CeFormQueryWrapperModule, CeFormsPipesModule, CeListModule, CeNgReallyModule, CeSectionModule } from "@codeffekt/ce-core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
    declarations: [
        UserProjectsSharedComponent
    ],
    imports: [
        CommonModule,
        CeSectionModule,
        CeFormQueryWrapperModule,
        CeListModule,
        CeFormsPipesModule,
        CeNgReallyModule,
        MatButtonModule,
        MatMenuModule,
    ],
    exports: [
        UserProjectsSharedComponent
    ]
})
export class UserProjectsSharedModule {

}