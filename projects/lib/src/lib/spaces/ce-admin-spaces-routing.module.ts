import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainHomeComponent } from "../main/main-home";
import { SpaceEditorResolverService } from "@codeffekt/ce-core";

const routes: Routes = [
    {
        path: '',
        data: { routeId: 'Espaces' },
        component: MainHomeComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./spaces/spaces.component').then(m => m.SpacesComponent),
            },
            {
                path: ':form',
                resolve: {
                    form: SpaceEditorResolverService,
                },
                loadComponent: () => import('./space-editor/space-editor.component').then(m => m.SpaceEditorComponent)
            }
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CeAdminSpacesRoutingModule { }