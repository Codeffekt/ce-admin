import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProcessingsComponent } from "./processings";
import { MainHomeComponent } from "../main/main-home/main-home.component";
import { ProcessingComponent } from "./processing";
import { FormEditorResolverService } from "@codeffekt/ce-core";

const routes: Routes = [
    {
        path: '',
        component: MainHomeComponent,
        children: [
            {
                path: '',
                component: ProcessingsComponent,
            },
            {
                path: 'edit/:form',
                resolve: {
                    form: FormEditorResolverService,
                },
                component: ProcessingComponent,
            }
        ]
    }];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CeAdminProcessingRoutingModule { }