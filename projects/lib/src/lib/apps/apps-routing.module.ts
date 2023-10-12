import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppEditorComponent } from "./app-editor/app-editor.component";
import { AppMasksComponent } from "./app-editor/app-masks/app-masks.component";
import { AppSettingsComponent } from "./app-editor/app-settings/app-settings.component";
import { AppFormGuard, FormFieldGuard, SubFormEditorComponent } from "./app-form-editor";
import { AppFormEditorComponent } from "./app-form-editor/app-form-editor.component";
import { AppConfigGuard } from "./app-project/app-config.guard";
import { AppProjectComponent } from "./app-project/app-project.component";
import { AppProjectGuard } from "./app-project/app-project.guard";
import { ProjectFormsComponent } from "./app-project/project-forms/project-forms.component";
import { ProjectFormsGuard } from "./app-project/project-forms/project-forms.guard";
import { AppProjectsComponent } from "./app-projects/app-projects.component";
import { AppRunnerComponent } from "./app-runner/app-runner.component";
import { AppRunnerGuard } from "./app-runner/app-runner.guard";
import { AppsComponent } from "./apps/apps.component";

const routes: Routes = [
    {
        path: "",
        data: { routeId: "apps" },
        children: [
            {
                path: "",
                data: { routeId: null },
                component: AppsComponent
            },
            {
                path: ":appId",
                canActivate: [AppRunnerGuard],
                children: [
                    {
                        path: "",
                        redirectTo: "edit"
                    },
                    {
                        path: "edit",
                        data: { routeId: null },
                        component: AppEditorComponent,                        
                        children: [{
                            path: "",
                            redirectTo: "projects"
                        },
                        {
                            path: "projects",                            
                            component: AppProjectsComponent,
                        },                        
                        {
                            path: "masks",
                            component: AppMasksComponent,
                        },
                        {
                            path: "settings",
                            component: AppSettingsComponent,
                        }]
                    },
                    {
                        path: "run",
                        data: { routeId: null },
                        canActivate: [AppConfigGuard],
                        component: AppRunnerComponent,                        
                        children: [
                            {
                                path: ":projectId",
                                component: AppProjectComponent,
                                canActivate: [AppProjectGuard],
                                children: [
                                    {
                                        path: ":assocId",
                                        canActivate: [ProjectFormsGuard],
                                        children: [
                                            {
                                                path: "",
                                                component: ProjectFormsComponent,
                                            },
                                            {
                                                path: ":formId",
                                                canActivate: [AppFormGuard],
                                                children: [
                                                    {
                                                        path: "",
                                                        component: AppFormEditorComponent,
                                                    },
                                                    {
                                                        path: ":fieldId",
                                                        component: SubFormEditorComponent,
                                                        canActivate: [FormFieldGuard]
                                                    }
                                                ]
                                            }]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },                        
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppsRoutingModule { }