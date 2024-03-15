import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
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
import { MatIconModule } from '@angular/material/icon';
import { CeCodeEditorModule } from '@codeffekt/ce-code-editor';
import { ProjectNewComponent } from './project-new/project-new.component';
import { CeAdminAuthZModule } from '../authz/authz.module';
import { ListItemProjectComponent } from '../list-item-project/list-item-project/list-item-project.component';
import { FormProject } from '@codeffekt/ce-core-data';
import { FormRouteResolver } from '../services/form-route.resolver';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ProjectTopbarComponent } from './project-topbar/project-topbar.component';
@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectCreatorDialogComponent,
    ProjectEditorComponent,
    ProjectAccountsComponent,
    ProjectNewComponent,
    ProjectTopbarComponent
  ],
  imports: [
    CommonModule,   
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
    ProjectAccountsComponent,
    ProjectTopbarComponent,
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
