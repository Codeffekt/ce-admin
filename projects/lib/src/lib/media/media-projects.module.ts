import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CeFormQueryWrapperModule, CeListModule, CeMediaModule, CeNavigationModule, CeNgReallyModule, CePipesModule } from "@codeffekt/ce-core";
import { MediaProjectsRoutingModule } from "./media-projects-routing.module";
import { MediaProjectsComponent } from './media-projects/media-projects.component';

@NgModule({
    imports: [
        CommonModule,
        MediaProjectsRoutingModule,
        CeListModule,
        CeNavigationModule,
        CeNgReallyModule,
        CeMediaModule,
        CePipesModule,
        CeFormQueryWrapperModule,
    ], declarations: [
        MediaProjectsComponent,       
    ],
    providers: [        
    ]
})
export class MediaProjectsModule { }