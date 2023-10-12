import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsVersionEditorComponent } from './forms-version-editor/forms-version-editor.component';
import { FormsVersionComponent } from './forms-version/forms-version.component';

const routes: Routes = [
  {
    path: '',
    data: { routeId: 'formsversion' },
    children: [
      {
        path: '',
        data: { routeId: null },
        component: FormsVersionComponent
      }, 
      {
        path: 'edit/:form',
        data: { routeId: null },
        component: FormsVersionEditorComponent
      },     
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsVersionRoutingModule { }
