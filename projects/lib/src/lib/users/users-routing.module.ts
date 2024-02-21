import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CeFormsService } from '@codeffekt/ce-core';
import { FormRoot } from '@codeffekt/ce-core-data';
import { firstValueFrom } from 'rxjs';
import { FormRootCollectionComponent } from '../forms-root';

@Injectable({
  providedIn: 'root'
})
export class FormsAccountResolverService implements Resolve<FormRoot> {

  constructor(private formsService: CeFormsService) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<FormRoot> {

    const id = 'forms-account';

    const root = await firstValueFrom(this.formsService.getFormRoot(id));

    if (!root) {
      throw new Error(`Root ${id} not found`);
    }

    return root;
  }
}

const routes: Routes = [
  {
    path: '',
    data: { routeId: 'Utilisateurs' },
    children: [
      {
        path: '',
        data: {
          routeId: null,
        },
        resolve: {
          form: FormsAccountResolverService,
        },
        component: FormRootCollectionComponent,
      },      
      {
        path: ':project',
        data: { routeId: null },
        loadChildren: () => import('../forms/form-editor/form-editor.module').then(m => m.FormEditorModule)

      }
      /* {
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
      }, */
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
