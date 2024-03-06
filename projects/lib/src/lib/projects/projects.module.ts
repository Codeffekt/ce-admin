import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectCreatorDialogComponent } from './project-creator-dialog/project-creator-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectEditorComponent } from './project-editor/project-editor.component';
import { ProjectAccountsComponent } from './project-accounts/project-accounts.component';
import {
  CeFormDataService, CeFormQueryWrapperModule,
  CeFormsModule, CeFormsPipesModule, CeListModule, CeNavigationModule,
  CeNgReallyModule,
  CePipesModule,
  ListItemStoreService
} from '@codeffekt/ce-core';
import { FormDataService } from '../services/form-data.service';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { CeCodeEditorModule } from '@codeffekt/ce-code-editor';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { ProjectNewComponent } from './project-new/project-new.component';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { CeAdminAuthZModule } from '../authz/authz.module';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { ListItemProjectComponent } from '../list-item-project/list-item-project/list-item-project.component';
import { FormProject } from '@codeffekt/ce-core-data';
import { FormRouteResolver } from '../services/form-route.resolver';
@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectCreatorDialogComponent,
    ProjectEditorComponent,
    ProjectAccountsComponent,
    ProjectNewComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    CeNavigationModule,
    CeFormQueryWrapperModule,
    CeFormsPipesModule,
    CeNgReallyModule,
    CeListModule,
    CePipesModule,
    CeFormsModule,
    CeCodeEditorModule,
    CeAdminAuthZModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatChipsModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonModule,
  ],
  exports: [
    ProjectsComponent,
    ProjectCreatorDialogComponent,
    ProjectEditorComponent,
    ProjectAccountsComponent
  ],
  providers: [
    {
      provide: CeFormDataService,
      useClass: FormDataService
    },    
  ]
})
export class ProjectsModule {

  constructor(listItemStore: ListItemStoreService) {

    listItemStore.setComponents({
      [FormProject.ROOT]: {
        useClass: ListItemProjectComponent,
      }
    });

  }

}
