import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from "@angular/material/legacy-autocomplete";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
import { MatLegacyChipsModule as MatChipsModule } from "@angular/material/legacy-chips";
import { MatLegacyDialogModule as MatDialogModule } from "@angular/material/legacy-dialog";
import { MatLegacyFormFieldModule as MatFormFieldModule } from "@angular/material/legacy-form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { MatLegacyMenuModule as MatMenuModule } from "@angular/material/legacy-menu";
import { MatLegacySelectModule as MatSelectModule } from "@angular/material/legacy-select";
import { MatLegacyTableModule as MatTableModule } from "@angular/material/legacy-table";
import { MatLegacyTabsModule as MatTabsModule } from "@angular/material/legacy-tabs";
import { CeCodeEditorModule } from "@codeffekt/ce-code-editor";
import { 
    CeFormQueryWrapperModule, CeFormsPipesModule, 
    CeLayoutModule, CeListModule, 
    CeNavigationModule, CeNgReallyModule, 
    CePipesModule, CeTableModule, 
    CeSectionModule } from "@codeffekt/ce-core";
import { CeAdminAuthZModule } from "../authz/authz.module";
import { UserActionsComponent } from "./user-actions/user-actions.component";
import { UserJsonComponent } from "./user-json/user-json.component";
import { UsersComponent } from "./users.component";
import { UserCreationComponent } from "./user-creation/user-creation.component";
import { UserCreationInfoComponent } from "./user-creation-info/user-creation-info.component";

@NgModule({
    declarations: [
        UsersComponent,        
        UserActionsComponent,
        UserJsonComponent,        
        UserCreationComponent,
        UserCreationInfoComponent,        
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
        UserActionsComponent,
        UserJsonComponent,
        UserCreationComponent,
        UserCreationInfoComponent
    ]
})
export class CeAdminUsersWidgetModule {    
}