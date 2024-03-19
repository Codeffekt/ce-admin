import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'forms',
        pathMatch: 'full'
    },
    {
        path: 'root',
        loadChildren: () => import('../root/root.module').then(m => m.RootModule)
    },
    {
        path: 'forms',
        loadChildren: () => import('../forms/form.module').then(m => m.FormsModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes/* , { enableTracing: true } */)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
