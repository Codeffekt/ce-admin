import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormRoot, FormWrapper, IndexType } from '@codeffekt/ce-core-data';
import { FormRootCreatorDialogComponent } from '../form-root-creator-dialog/form-root-creator-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { CeFormsService, LayoutService } from '@codeffekt/ce-core';
import { Router } from '@angular/router';
import { CE_ADMIN_ROUTE_RESOLVER, CeAdminRouteResolver } from '../../ce-admin-route.resolver';

@Component({
  selector: 'lib-form-root-topbar',
  templateUrl: './form-root-topbar.component.html',
  styleUrls: ['./form-root-topbar.component.css']
})
export class FormRootTopbarComponent {

  @Input() formWrapper!: FormWrapper;
  @Output() formChanges = new EventEmitter<FormWrapper>();

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private apiService: CeFormsService,
    private layout: LayoutService,
    @Inject(CE_ADMIN_ROUTE_RESOLVER) private routeResolver: CeAdminRouteResolver
  ) {

  }

  create() {
    const ref = this.dialog.open(
      FormRootCreatorDialogComponent,
      FormRootCreatorDialogComponent.createDialog()
    );

    ref.afterClosed()
      .subscribe(formConfig => {
        if (formConfig?.root?.length) {
          this.createNewRoot(formConfig?.root);
        }
      });
  }

  private async createNewRoot(root: IndexType) {
    const existingRoot = await firstValueFrom(this.apiService.getFormRoot(root));
    if (existingRoot?.id) {
      this.layout.showErrorMessage(`Root ${root} id already exists.`);
      return;
    }
    await this.saveNewForm({
      id: root,
      ctime: Date.now(),
      title: root,
      content: {}
    } as FormRoot)
  }

  async saveNewForm(formRoot: FormRoot) {
    try {
      const newFormRoot = await this.apiService.updateFormRoot(formRoot);
      this.layout.showSingleMessage(`Formulaire ${formRoot.title ?? formRoot.id} ajouté`);
      this.router.navigate(this.routeResolver.resolve("formsroot.edit", newFormRoot.id).route);
    } catch (err) {
      this.layout.showErrorMessage(`Erreur lors la création du formulaire`);
    }
  }
}
