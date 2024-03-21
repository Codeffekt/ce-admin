import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CeFormQueryService, CeFormsService, FormsFormQueryBuilder, LayoutService } from '@codeffekt/ce-core';
import { FormRoot, FormWrapper, IndexType } from '@codeffekt/ce-core-data';
import { Observable, firstValueFrom } from 'rxjs';
import { FormsRootDataSource } from './forms-root-datasource';
import { FormRootCreatorDialogComponent } from '../form-root-creator-dialog/form-root-creator-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CE_ADMIN_ROUTE_RESOLVER, CeAdminRouteResolver } from '../../ce-admin-route.resolver';

@Component({
  selector: 'ce-admin-forms-root',
  templateUrl: './forms-root.component.html',
  styleUrls: ['./forms-root.component.css'],
  providers: [
    CeFormQueryService
  ]
})
export class FormsRootComponent implements OnInit {

  @Input() formWrapper!: FormWrapper;
  @Output() formChanges = new EventEmitter<FormWrapper>();

  formsDataSource!: FormsRootDataSource;
  formQueryBuilder = new FormsFormQueryBuilder();
  forms$!: Observable<readonly FormWrapper[]>;

  constructor(
    private readonly queryService: CeFormQueryService<FormWrapper>,
    private route: ActivatedRoute,
    private dialog: MatDialog,    
    private router: Router,
    private layout: LayoutService,
    private formsService: CeFormsService,
    @Inject(CE_ADMIN_ROUTE_RESOLVER) private routeResolver: CeAdminRouteResolver) {
    this.formsDataSource = new FormsRootDataSource(this.formsService);
    this.queryService.setDatasource(this.formsDataSource);
  }

  ngOnInit() {
    this.prepareQueryService();
  }

  createInstance(form: FormWrapper) {
    this.router.navigate(['home', 'root', 'new', form.core.id]);
  }

  collection(form: FormWrapper) {
    this.router.navigate(['home', 'root', 'collection', form.core.id]);
  }

  edit(form: FormWrapper) {
    this.router.navigate(['home', 'root', 'edit', form.core.id]);
  }

  reloadForms() {
    this.formsDataSource.reload();
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

  async delete(form: FormWrapper) {
    try {
      await this.formsService.removeRoot(form.core.id);
      this.layout.showSingleMessage(`Le formulaire ${form.core.id} à été supprimé.`);
      this.reloadForms();
    } catch (err) {
      this.layout.showErrorMessage(`Erreur lors de la suppression du formulaire ${form.core.id}`);
    }
  }

  private async prepareQueryService() {
    this.queryService.setQueryBuilder(this.formQueryBuilder);
    this.forms$ = this.queryService.connect();
    this.queryService.load();
  }

  private async createNewRoot(root: IndexType) {
    const existingRoot = await firstValueFrom(this.formsService.getFormRoot(root));
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
      const newFormRoot = await this.formsService.updateFormRoot(formRoot);
      this.layout.showSingleMessage(`Formulaire ${formRoot.title ?? formRoot.id} ajouté`);
      this.router.navigate(['home', 'root', 'edit', newFormRoot.id]);
    } catch (err) {
      this.layout.showErrorMessage(`Erreur lors la création du formulaire`);
    }
  }
}
