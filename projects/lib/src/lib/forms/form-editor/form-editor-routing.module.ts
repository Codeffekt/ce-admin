import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormProjectResolverService } from "@codeffekt/ce-core";
import { FormEditorComponent } from "./form-editor.component";

const routes: Routes = [
    {
        path: '',
        data: { 
            routeId: 'field',
            labelFromData: null,
        },
        resolve: {
            form: FormProjectResolverService
        },
        children: [
            {
                path: '',
                data: { routeId: null },
                component: FormEditorComponent,
            },
            {
                path: ':project',
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