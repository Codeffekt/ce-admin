import { NgModule } from "@angular/core";
import {
    CeFormQueryWrapperModule, 
    CeFormsPipesModule, CeLayoutModule,
    CeListModule, CeNavigationModule,
    CeNgReallyModule, CePipesModule, CeSectionModule, FormActionBuilder, FormActionService
} from "@codeffekt/ce-core";
import { FormAccount } from "@codeffekt/ce-core-data";
import { UserEditorComponent } from "./user-editor.component";
import { UserMainInfoComponent } from "../user-main-info/user-main-info.component";
import { UserProjectsSharedComponent } from "../user-projects-shared/user-projects-shared.component";
import { UserProjectsOwnedComponent } from "../user-projects-owned/user-projects-owned.component";
import { UserPasswordComponent } from "../user-password/user-password.component";
import { UserApiKeyComponent } from "../user-api-key/user-api-key.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ClipboardModule } from "@angular/cdk/clipboard";
import { UserCreationComponent } from "../user-creation/user-creation.component";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
    declarations: [
        UserEditorComponent,
        UserMainInfoComponent,
        UserProjectsSharedComponent,
        UserProjectsOwnedComponent,
        UserPasswordComponent,
        UserApiKeyComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatDialogModule,
        ClipboardModule,
        CeLayoutModule,
        CeSectionModule,
        CeNavigationModule,
        CePipesModule,
        CeFormsPipesModule,
        CeFormQueryWrapperModule,
        CeNgReallyModule,
        CeListModule,
    ],
    exports: [
        UserEditorComponent,
    ]
})
export class UserEditorModule {

    constructor(
        formActionService: FormActionService,        
    ) {
        formActionService.setActions({
            [FormAccount.ROOT]: FormActionBuilder
                .withRender(UserEditorComponent)
                .setBuilder(UserCreationComponent)
        });        
    }

}