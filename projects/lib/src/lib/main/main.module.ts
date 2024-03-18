import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { Injectable, NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
  CeFormEditorModule, CeGridModule,
  CeOverflowModule, CeSideMenuModule,
  FormActionBuilder, FormActionDefault, FormActionService,
  FormsLocalDatabaseService
} from '@codeffekt/ce-core';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ProjectsModule } from '../projects/projects.module';
import { ProjectsComponent } from '../projects/projects.component';
import { ProjectTopbarComponent } from '../projects/project-topbar/project-topbar.component';
import { UsersModule } from '../users/users.module';
import { UsersComponent } from '../users/users.component';
import { UserTopbarComponent } from '../users/user-topbar/user-topbar.component';
import { FormsModule } from '../forms/forms.module';
import { FormsComponent } from '../forms/forms/forms.component';
import { FormTopbarComponent } from '../forms/form-topbar/form-topbar.component';
import { FormsRootComponent } from '../forms-root/forms-root/forms-root.component';
import { FormRootTopbarComponent } from '../forms-root/form-root-topbar/form-root-topbar.component';
import { MediaProjectsModule } from '../media/media-projects.module';
import { MediaProjectsComponent } from '../media/media-projects/media-projects.component';
import { SubFormModule } from '../forms/subform/subform.module';
import { FormToolbarComponent } from '../forms/form-toolbar/form-toolbar.component';


@NgModule({
  declarations: [
    MainComponent,
    MainMenuComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CeSideMenuModule,
    CeFormEditorModule,
    CeGridModule,
    CeOverflowModule,
    PortalModule,
    MatSnackBarModule,
    MatSidenavModule,
    ProjectsModule,
    UsersModule,
    FormsModule,
    MediaProjectsModule,
    SubFormModule,
  ],
  exports: [
    MainComponent,
    MainMenuComponent,
  ],
  providers: [    
  ]
})
export class CeAdminMainModule {

  constructor(
    formActions: FormActionService,
    localDatabase: FormsLocalDatabaseService
  ) {   

    formActions.setActions({
      'form-projects': FormActionBuilder
        .withRender(ProjectsComponent)      
        .setTopbar(ProjectTopbarComponent),
      'form-users': FormActionBuilder
        .withRender(UsersComponent)        
        .setTopbar(UserTopbarComponent),
      'form-forms': FormActionBuilder
        .withRender(FormsComponent)        
        .setTopbar(FormTopbarComponent),
      'form-formsroot': FormActionBuilder
        .withRender(FormsRootComponent)      
        .setTopbar(FormRootTopbarComponent),
      'form-media': FormActionBuilder
        .withRender(MediaProjectsComponent),        
      'forms-trias-hardware': FormActionBuilder
        .withToolbar(FormToolbarComponent),        
    });

    localDatabase.setForms({
      'users': {
        id: 'users',
        title: 'Utilisateurs',
        ctime: Date.now(),
        valid: true,
        root: 'form-users',
        content: {}
      },
      'projects': {
        id: 'projects',
        title: 'Projets',
        ctime: Date.now(),
        valid: true,
        root: 'form-projects',
        content: {}
      },
      'formsroot': {
        id: 'formsroot',
        title: 'Modèles',
        ctime: Date.now(),
        valid: true,
        root: 'form-formsroot',
        content: {}
      },
      'forms': {
        id: 'forms',
        title: 'Formulaires',
        ctime: Date.now(),
        valid: true,
        root: 'form-forms',
        content: {}
      },
      'media': {
        id: 'media',
        title: 'Media',
        ctime: Date.now(),
        valid: true,
        root: 'form-media',
        content: {}
      }
    });

  }

}
