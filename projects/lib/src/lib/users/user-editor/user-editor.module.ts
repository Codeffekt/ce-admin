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
import { MatLegacyFormFieldModule as MatFormFieldModule } from "@angular/material/legacy-form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacySelectModule as MatSelectModule } from "@angular/material/legacy-select";
import { MatLegacyDialogModule as MatDialogModule } from "@angular/material/legacy-dialog";
import { ClipboardModule } from "@angular/cdk/clipboard";
import { UserCreationComponent } from "../user-creation/user-creation.component";

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