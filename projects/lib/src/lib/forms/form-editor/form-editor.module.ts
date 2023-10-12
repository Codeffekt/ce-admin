import { NgModule } from "@angular/core";
import { FormEditorComponent } from "./form-editor.component";
import { CommonModule } from "@angular/common";
import { CeEditTimeModule, CeFeatureBarModule, CeFormModule, CeLayoutModule, CeNavigationModule, CeNgReallyModule, CePipesModule } from "@codeffekt/ce-core";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";
import { FormUserOwnerModule } from "../form-user-owner";
import { FormUsersSharedModule } from "../form-users-shared/form-users-shared.module";
import { FormEditorRoutingModule } from "./form-editor-routing.module";
import { MatMenuModule } from "@angular/material/menu";
import { FormEditorDetailsComponent } from './form-editor-details/form-editor-details.component';
import { DetailsPropComponent } from './form-editor-details/details-prop/details-prop.component';
import { DetailsSectionComponent } from './form-editor-details/details-section/details-section.component';
import { MatChipsModule } from "@angular/material/chips";
import { FormEditorToolbarComponent } from './form-editor-toolbar/form-editor-toolbar.component';
import { MatTooltipModule } from "@angular/material/tooltip";
import { FormUserSharingsComponent } from './form-sharings/form-user-sharings.component';

@NgModule({
    declarations: [
        FormEditorComponent,
        FormEditorDetailsComponent,
        DetailsPropComponent,
        DetailsSectionComponent,
        FormEditorToolbarComponent,
        FormUserSharingsComponent,
    ],
    imports: [
        CommonModule,
        FormEditorRoutingModule,
        CeNavigationModule,
        CeFormModule,
        CeNgReallyModule,
        MatIconModule,
        MatTabsModule,
        MatButtonModule,
        MatMenuModule,
        FormUserOwnerModule,
        FormUsersSharedModule,
        CeLayoutModule,
        MatChipsModule,
        CeEditTimeModule,
        CeFeatureBarModule,
        MatTooltipModule,
        CePipesModule
    ],
    providers: [],
    exports: [
        FormEditorComponent,
    ]
})
export class FormEditorModule {
}