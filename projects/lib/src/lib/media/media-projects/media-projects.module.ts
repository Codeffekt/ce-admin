import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MediaProjectsComponent } from "./media-projects.component";
import {
    CeFormQueryWrapperModule, CeListModule,
    CeMediaModule, CeNavigationModule, CeNgReallyModule, CePipesModule
} from "@codeffekt/ce-core";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        MediaProjectsComponent,
    ],
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
    exports: [
        MediaProjectsComponent,
    ]
})
export class MediaProjectsModule {

}