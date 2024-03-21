import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MediaProjectsRoutingModule } from "./media-projects-routing.module";
import { MainHomeModule } from "../main/main-home";
import { MediaProjectsModule } from "./media-projects/media-projects.module";

@NgModule({
    imports: [
        CommonModule, 
        MediaProjectsRoutingModule,                
        MainHomeModule,
        MediaProjectsModule,
    ],
    declarations: [        
    ],
    providers: [
    ],
    exports: [    
    ]
})
export class CeAdminMediaProjectsModule { }