import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormHomeComponent } from '../forms/form-home/form-home.component';

const routes: Routes = [
  {
    path: '',    
    data: { isRoot: true },
    component: FormHomeComponent,    
    children: [
      {
        path: '',
        redirectTo: 'forms',
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
export class AdminFormsRoutingModule { }
