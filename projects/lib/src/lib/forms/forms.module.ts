import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { FormsRoutingModule } from './forms-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormCreatorDialogComponent } from './form-creator-dialog/form-creator-dialog.component';
import {
  CeFormDataService, CeFormQueryWrapperModule, CeFormRouteResolver, CeFormsModule,
  CeFormsPipesModule,
  CeLayoutModule,
  CeListModule,
  CeNavigationModule,
  CeNgReallyModule,
  CePipesModule,
  ListItemStoreService
} from '@codeffekt/ce-core';
import { FormDataService } from '../services/form-data.service';
import { MatIconModule } from '@angular/material/icon';
import { CeCodeEditorModule } from '@codeffekt/ce-code-editor';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { FormSelectionDialogComponent } from './form-selection-dialog/form-selection-dialog.component';
import { ListItemProjectModule } from '../list-item-project/list-item-project.module';
import { ListItemProjectComponent } from '../list-item-project/list-item-project/list-item-project.component';
import { FormProject } from '@codeffekt/ce-core-data';
import { FormEditorJsonDialogComponent } from './form-editor-json/form-editor-json.component';
import { CeAdminAuthZModule } from '../authz';
import { FormEditorModule } from './form-editor';
import { FormUserOwnerModule } from './form-user-owner';
import { FormUsersSharedModule } from './form-users-shared/form-users-shared.module';
import { CeFormSharingDialogModule } from './form-editor/form-sharing-dialog/form-sharing-dialog.module';
import { FormRouteResolver } from '../services/form-route.resolver';
import { UserEditorModule } from '../users/user-editor/user-editor.module';

@NgModule({
  declarations: [
    FormsComponent,
    FormCreatorDialogComponent,
    FormSelectionDialogComponent,
    FormEditorJsonDialogComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    CeNavigationModule,
    CeFormQueryWrapperModule,
    CeLayoutModule,
    CePipesModule,
    CeListModule,
    CeCodeEditorModule,
    CeNgReallyModule,
    CeFormsModule,
    CeFormsPipesModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatMenuModule,
    ListItemProjectModule,
    CeAdminAuthZModule,
    FormEditorModule,
    FormUserOwnerModule,
    FormUsersSharedModule,
    CeLayoutModule,
    CeFormSharingDialogModule,
    UserEditorModule,
  ],
  exports: [
    FormsComponent,    
  ],
  providers: [
    {
      provide: CeFormDataService,
      useClass: FormDataService
    },
    {
      provide: CeFormRouteResolver,
      useClass: FormRouteResolver,
    }
  ]
})
export class FormsModule {

  constructor(listItemStore: ListItemStoreService) {

    listItemStore.setComponents({
      [FormProject.ROOT]: {
        useClass: ListItemProjectComponent,
      }
    });

  }

}
