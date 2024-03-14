import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CeFormEditorComponent, FormEditorResolverService } from "@codeffekt/ce-core";

const routes: Routes = [
    {
        path: '',
        data: { 
            routeId: 'field',
            labelFromData: null,
        },
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
                loadChildren: () => import('./form-editor.module').then(m => m.FormEditorModule)
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormEditorRoutingModule {

}