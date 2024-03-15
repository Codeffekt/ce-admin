import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
    CeFormQueryWrapperModule, CeListModule,
    CeMediaModule, CeNavigationModule,
    CeNgReallyModule, CePipesModule
} from "@codeffekt/ce-core";
import { MediaProjectsComponent } from './media-projects/media-projects.component';
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule, 
        RouterModule,       
        CeListModule,
        CeNavigationModule,
        CeNgReallyModule,
        CeMediaModule,
        CePipesModule,
        CeFormQueryWrapperModule,
    ],
    declarations: [
        MediaProjectsComponent,
    ],
    providers: [
    ],
    exports: [
        MediaProjectsComponent,
    ]
})
export class MediaProjectsModule { }