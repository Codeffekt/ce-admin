import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormRootEditorComponent } from './form-root-editor/form-root-editor.component';
import { FormsRootComponent } from './forms-root/forms-root.component';
import { FormRootResolverService } from './form-root-resolver.service';
import { FormRootCollectionComponent } from './form-root-collection/form-root-collection.component';

const routes: Routes = [
  {
    path: '',
    data: { routeId: 'Formulaires Racines' },
    children: [
      {
        path: '',
        data: { routeId: null },
        component: FormsRootComponent
      },
      {
        path: 'new',
        data: { routeId: null },
        component: FormRootEditorComponent
      },
      {
        path: 'collection/:form',
        resolve: {
          form: FormRootResolverService
        },
        data: {
          labelFromData: {
            dataFormName: "form",
            field: "$title"
          }
        },
        children: [
          {
            path: '',
            data: { routeId: null },
            component: FormRootCollectionComponent,
          },
          {
            path: ':project',
            data: { routeId: null },
            loadChildren: () => import('../forms/form-editor/form-editor.module').then(m => m.FormEditorModule)

          }
        ]
        
      },
      {
        path: 'edit/:form',
        data: { routeId: null },
        component: FormRootEditorComponent
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRootRoutingModule { }
