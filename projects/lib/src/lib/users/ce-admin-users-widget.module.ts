import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
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
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";

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