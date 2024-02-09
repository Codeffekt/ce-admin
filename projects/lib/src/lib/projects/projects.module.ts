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
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { CeCodeEditorModule } from '@codeffekt/ce-code-editor';
import { MatButtonModule } from '@angular/material/button';
import { ProjectNewComponent } from './project-new/project-new.component';
import { MatInputModule } from '@angular/material/input';
import { CeAdminAuthZModule } from '../authz/authz.module';
import { MatMenuModule } from '@angular/material/menu';
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
