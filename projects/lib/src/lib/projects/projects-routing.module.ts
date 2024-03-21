import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectResolverService } from '@codeffekt/ce-core';

import { ProjectsComponent } from './projects.component';
import { MainHomeComponent } from '../main/main-home';

const routes: Routes = [
  {
    path: '',
    data: { routeId: 'Projets' },
    component: MainHomeComponent,
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
