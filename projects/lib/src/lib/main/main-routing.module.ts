import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../services/admin.guard';
import { MainComponent } from './main.component';

const routes: Routes = [{
  path: '',
  data: { isRoot: true },
  component: MainComponent,
  canActivate: [AdminGuard],
  children: [    
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
