import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CeFormEditorComponent, FormEditorResolverService } from '@codeffekt/ce-core';

const routes: Routes = [
    {
        path: '',
        data: { routeId: 'field' },
        children: [
            {
                path: '',
                data: { routeId: null },
                resolve: {
                    form: FormEditorResolverService,
                },
                component: CeFormEditorComponent,               
            },
            {
                path: ':form',
                data: { routeId: null },
                loadChildren: () => import('../subform/subform.module').then(m => m.SubFormModule)
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SubFormRoutingModule { }
