import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import {
  CeFormsModule, CeFormsPipesModule, CeListModule,
  CeNavigationModule,
  CePipesModule,
  CeSideMenuModule,
  ListItemStoreService,
} from "@codeffekt/ce-core";
import { AppEditorComponent } from './app-editor/app-editor.component';
import { AppsRoutingModule } from "./apps-routing.module";
import { AppsComponent } from "./apps/apps.component";
import { AppListItemComponent } from './app-list-item/app-list-item.component';
import { AppCreatorComponent } from './app-creator/app-creator.component';
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { AppRunnerComponent } from './app-runner/app-runner.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { AppProjectsComponent } from './app-projects/app-projects.component';
import { AppProjectListItemComponent } from './app-project-list-item/app-project-list-item.component';
import { AppProjectComponent } from './app-project/app-project.component';
import { ProjectFormsComponent } from './app-project/project-forms/project-forms.component';
import { AppFormEditorComponent } from './app-form-editor/app-form-editor.component';
import { SubFormEditorComponent } from './app-form-editor/sub-form-editor/sub-form-editor.component';
import { AppMasksComponent } from './app-editor/app-masks/app-masks.component';
import { AppSettingsComponent } from './app-editor/app-settings/app-settings.component';
import { ListItemProjectModule } from "../list-item-project/list-item-project.module";
import { ListItemProjectComponent } from "../list-item-project/list-item-project/list-item-project.component";

@NgModule({
  declarations: [
    AppsComponent,
    AppEditorComponent,
    AppListItemComponent,
    AppCreatorComponent,
    AppRunnerComponent,
    AppProjectsComponent,
    AppProjectListItemComponent,
    AppProjectComponent,
    ProjectFormsComponent,
    AppFormEditorComponent,
    SubFormEditorComponent,
    AppMasksComponent,
    AppSettingsComponent
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatSidenavModule,
    CeSideMenuModule,
    CeFormsModule,
    CeNavigationModule,
    CeListModule,
    CePipesModule,
    CeFormsPipesModule,
    ListItemProjectModule,
  ],
  exports: [],
  providers: [],
})
export class AppsModule {

  constructor(listItemStore: ListItemStoreService) {

    listItemStore.setComponents({
      "project": {
        useClass: ListItemProjectComponent,
      },
      "app": {
        useClass: AppListItemComponent,
      }
    });

  }

}