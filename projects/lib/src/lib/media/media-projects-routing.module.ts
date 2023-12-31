import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormProjectResolverService, MediaProjectComponent } from "@codeffekt/ce-core";
import { MediaProjectsComponent } from "./media-projects/media-projects.component";

const routes: Routes = [
    {
        path: '',
        data: { routeId: 'Media' },        
        children: [
            {
                path: '',
                data: { routeId: null },
                component: MediaProjectsComponent,
            },
            {
                path: ':project',
                data: { routeId: 'name' },
                resolve: {
                    form: FormProjectResolverService,                    
                },
                component: MediaProjectComponent
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MediaProjectsRoutingModule { }