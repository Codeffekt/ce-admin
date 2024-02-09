import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CeFormEditorComponent, FormEditorResolverService } from "@codeffekt/ce-core";

const routes: Routes = [
    {
        path: '',
        data: { routeId: 'field' },
        resolve: {
          form: FormEditorResolverService,
        },
        children: [
          {
            path: '',
            data: { routeId: null },
            component: CeFormEditorComponent,
          },
          {
            path: ':form',
            data: { routeId: null },
            loadChildren: () => import('./project-form.module').then(m => m.ProjectFormModule)
          },      
        ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectFormRoutingModule {}