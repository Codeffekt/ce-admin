import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CeProjectFormModule } from "@codeffekt/ce-core";
import { ProjectFormRoutingModule } from "./project-form-routing.module";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ProjectFormRoutingModule,
        CeProjectFormModule,
    ],
    providers: [        
    ]
})
export class ProjectFormModule {}