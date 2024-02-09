import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CeFormEditorComponent, FormEditorResolverService, ProjectResolverService } from '@codeffekt/ce-core';
import { ProjectEditorComponent } from './project-editor/project-editor.component';

import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {
    path: '',
    data: { routeId: 'Projets' },
    children: [
      {
        path: '',
        data: { routeId: null },
        component: ProjectsComponent
      },
      {
        path: ':form',
        data: { routeId: null },
        resolve: {
          form: ProjectResolverService,
        },
        loadChildren: () => import('./project-form/project-form.module').then(m => m.ProjectFormModule)
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
