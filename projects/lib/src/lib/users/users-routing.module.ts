import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserEditorComponent } from './user-editor/user-editor.component';

import { UsersComponent } from './users.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { AccountResolverService } from '@codeffekt/ce-core';

const routes: Routes = [
  {
    path: '',
    data: { routeId: 'Utilisateurs' },
    children: [
      {
        path: '',
        data: { routeId: null },
        component: UsersComponent
      },
      {
        path: 'edit/:account',
        data: { routeId: null },
        component: UserEditorComponent,
        resolve: {
          account: AccountResolverService,
        }
      },
      {
        path: 'new',
        data: { routeId: 'Nouvel Utilisateur' },
        component: UserCreationComponent
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
