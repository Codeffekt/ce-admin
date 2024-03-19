import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../services/admin.guard';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',    
    data: { isRoot: true },
    component: MainComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        redirectTo: 'projects',
        pathMatch: 'full'
      },
      {
        path: ':form',               
        loadChildren: () => import('../forms/subform/subform.module').then(m => m.SubFormModule)
      },      
    ]
  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
