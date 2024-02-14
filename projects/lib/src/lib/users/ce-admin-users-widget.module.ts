import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import {ClipboardModule} from '@angular/cdk/clipboard';
import { CeCodeEditorModule } from "@codeffekt/ce-code-editor";
import { 
    CeFormQueryWrapperModule, CeFormsPipesModule, 
    CeLayoutModule, CeListModule, 
    CeNavigationModule, CeNgReallyModule, 
    CePipesModule, CeTableModule, 
    CeSectionModule, CeFormStoreService } from "@codeffekt/ce-core";
import { CeAdminAuthZModule } from "../authz/authz.module";
import { UserActionsComponent } from "./user-actions/user-actions.component";
import { UserEditorComponent } from "./user-editor/user-editor.component";
import { UserJsonComponent } from "./user-json/user-json.component";
import { UserMainInfoComponent } from "./user-main-info/user-main-info.component";
import { UserProjectsSharedComponent } from "./user-projects-shared/user-projects-shared.component";
import { UsersComponent } from "./users.component";
import { UserProjectsOwnedComponent } from './user-projects-owned/user-projects-owned.component';
import { UserPasswordComponent } from "./user-password/user-password.component";
import { UserCreationComponent } from "./user-creation/user-creation.component";
import { UserCreationInfoComponent } from "./user-creation-info/user-creation-info.component";
import { UserApiKeyComponent } from './user-api-key/user-api-key.component';
import { FormAccount } from "@codeffekt/ce-core-data";

@NgModule({
    declarations: [
        UsersComponent,
        UserEditorComponent,
        UserMainInfoComponent,
        UserProjectsSharedComponent,
        UserActionsComponent,
        UserJsonComponent,
        UserProjectsOwnedComponent,
        UserPasswordComponent,
        UserCreationComponent,
        UserCreationInfoComponent,
        UserApiKeyComponent
    ],
    imports: [
        CeLayoutModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatSelectModule,
        MatTabsModule,
        MatButtonModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatMenuModule,
        ClipboardModule,
        CeListModule,
        CePipesModule,
        CeFormsPipesModule,
        CeNavigationModule,
        CeFormQueryWrapperModule,
        CeNgReallyModule,
        CeTableModule,
        CeCodeEditorModule,
        CeAdminAuthZModule,
        CeSectionModule
    ],
    exports: [
        UsersComponent,
        UserEditorComponent,
        UserMainInfoComponent,
        UserProjectsSharedComponent,
        UserActionsComponent,
        UserJsonComponent,
        UserCreationComponent,
        UserCreationInfoComponent
    ]
})
export class CeAdminUsersWidgetModule {

    constructor(
        formStore: CeFormStoreService,
    ) {
        /* formStore.setComponents({
            [FormAccount.ROOT]: UserEditorComponent
        }); */
    }

}