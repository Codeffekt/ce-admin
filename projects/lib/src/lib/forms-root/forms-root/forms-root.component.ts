import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CeFormQueryService, CeFormsService, FormsFormQueryBuilder, LayoutService } from '@codeffekt/ce-core';
import { FormRoot } from '@codeffekt/ce-core-data';
import { Observable, filter } from 'rxjs';
import { CE_ADMIN_ROUTE_RESOLVER, CeAdminRouteResolver } from '../../ce-admin-route.resolver';
import { FormEditorDialogWrapperComponent } from '../form-editor-dialog-wrapper/form-editor-dialog-wrapper.component';
import { FormsRootDataSource } from './forms-root-datasource';

@Component({
  selector: 'ce-admin-forms-root',
  templateUrl: './forms-root.component.html',
  styleUrls: ['./forms-root.component.css'],
  providers: [
    CeFormQueryService
  ]
})
export class FormsRootComponent implements OnInit {
  formsDataSource!: FormsRootDataSource;
  formQueryBuilder = new FormsFormQueryBuilder();
  forms$!: Observable<readonly FormRoot[]>;

  constructor(
    private dialog: MatDialog,
    private readonly queryService: CeFormQueryService<FormRoot>,
    private router: Router,
    private layout: LayoutService,
    private formsService: CeFormsService,
    private apiService: CeFormsService,
    @Inject(CE_ADMIN_ROUTE_RESOLVER) private routeResolver: CeAdminRouteResolver
  ) {
    this.formsDataSource = new FormsRootDataSource(this.formsService);
    this.queryService.setDatasource(this.formsDataSource);
  }

  ngOnInit() {
    this.prepareQueryService();
  }

  create() {
    // this.router.navigate(['/formsroot/new']);

    const ref = this.dialog.open(
      FormEditorDialogWrapperComponent,
      FormEditorDialogWrapperComponent.createDialog()
    );

    ref.afterClosed()
      .pipe(
        filter(forms => !!forms && forms.length)
      )
      .subscribe(forms =>
        // TODO: Should save all forms
        this.saveNewForm(forms[0])
      );
  }

  onSelected(form: FormRoot) {
    this.router.navigate(['formsroot', 'collection', form.id]);
  }

  edit(form: FormRoot) {
    this.router.navigate(['formsroot', 'edit', form.id]);
  }

  reloadForms() {
    this.formsDataSource.reload();
  }

  async delete(form: FormRoot) {
    try {
      await this.formsService.removeRoot(form.id);
      this.layout.showSingleMessage(`Le formulaire ${form.id} à été supprimé.`);
      this.reloadForms();
    } catch (err) {
      this.layout.showErrorMessage(`Erreur lors de la suppression du formulaire ${form.id}`);
    }
  }

  private async prepareQueryService() {
    this.queryService.setQueryBuilder(this.formQueryBuilder);
    this.forms$ = this.queryService.connect();
    this.queryService.load();
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
