import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../services/admin.guard';
import { MainComponent } from './main.component';
import {
  CeFormEditorComponent,
  FormEditorResolverService
} from '@codeffekt/ce-core';

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
        resolve: {
          form: FormEditorResolverService,
        },
        component: CeFormEditorComponent,
      },
    ]
  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
