import { NgModule } from "@angular/core";
import { FormEditorComponent } from "./form-editor.component";
import { CommonModule } from "@angular/common";
import { CeEditTimeModule, CeFeatureBarModule, CeFormEditorModule, CeFormModule, CeLayoutModule, CeNavigationModule, CeNgReallyModule, CePipesModule } from "@codeffekt/ce-core";
import { MatIconModule } from "@angular/material/icon";
import { FormUserOwnerModule } from "../form-user-owner";
import { FormUsersSharedModule } from "../form-users-shared/form-users-shared.module";
import { FormEditorRoutingModule } from "./form-editor-routing.module";
import { FormEditorDetailsComponent } from './form-editor-details/form-editor-details.component';
import { DetailsPropComponent } from './form-editor-details/details-prop/details-prop.component';
import { DetailsSectionComponent } from './form-editor-details/details-section/details-section.component';
import { FormEditorToolbarComponent } from './form-editor-toolbar/form-editor-toolbar.component';
import { FormUserSharingsComponent } from './form-sharings/form-user-sharings.component';
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatChipsModule } from '@angular/material/chips';
import { CeBarcodeModule } from "@codeffekt/ce-barcode";

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
        CeFormEditorModule,
        MatChipsModule,
        CeEditTimeModule,
        CeFeatureBarModule,
        MatTooltipModule,
        CePipesModule,
        CeBarcodeModule,
    ],
    providers: [],
    exports: [
        FormEditorComponent,
    ]
})
export class FormEditorModule {
}