import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { FormsComponent } from './forms/forms.component';
import { FormEditorResolverService, FormProjectResolverService, MembersResolverService } from '@codeffekt/ce-core';

const routes: Routes = [
  {
    path: '',
    data: { routeId: 'forms' },
    children: [
      {
        path: '',
        data: { routeId: null },
        component: FormsComponent
      },
      {
        path: 'edit/:form',
        data: { routeId: 'title' },
        resolve: {
          form: FormEditorResolverService,
          members: MembersResolverService
        },
        component: FormEditorComponent
      }, 
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
