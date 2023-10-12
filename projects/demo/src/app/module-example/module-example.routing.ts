import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleExampleComponent } from './module-example.component';

const routes: Routes = [
    {
        path: '',
        component: ModuleExampleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModuleExampleRoutingModule { }
