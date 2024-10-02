import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainHomeComponent } from "../main/main-home";
import { SpaceEditorResolverService, SpaceFormPathService } from "@codeffekt/ce-core";
import { SpaceFormPathResolverService } from "./space-form-editor";

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
                path: 'editor/:form',
                resolve: {
                    form: SpaceEditorResolverService,
                },
                loadComponent: () => import('./space-editor/space-editor.component').then(m => m.SpaceEditorComponent)
            },
            {
                path: 'form/:formPath',
                resolve: {
                    form: SpaceFormPathResolverService,
                },
                loadComponent: () => import('./space-form-editor/space-form-editor.component').then(m => m.SpaceFormEditorComponent),
                providers: [
                    SpaceFormPathResolverService,
                    SpaceFormPathService,
                ]
            }
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CeAdminSpacesRoutingModule { }