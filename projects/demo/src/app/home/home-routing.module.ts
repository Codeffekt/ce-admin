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
        loadChildren: () => import('../forms/form.module').then(m => m.FormsModule),        
    },
    {
        path: 'users',
        loadChildren: () => import('../users/users.module').then(m => m.UsersModule)
    },
    {
        path: 'projects',
        loadChildren: () => import('../projects/projects.module').then(m => m.ProjectsModule)
    },
    {
        path: 'media',
        loadChildren: () => import('../media/media.module').then(m => m.MediaModule)
    },
    {
        path: 'processings',
        loadChildren: () => import('../processings/processings.module').then(m => m.ProcessingsModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
