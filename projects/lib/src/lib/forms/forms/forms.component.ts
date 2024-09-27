import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CeBreadcrumbsService, CeFormQueryService, CeFormsService, FormWrappersDataSource, LayoutService } from '@codeffekt/ce-core';
import { FormWrapper } from '@codeffekt/ce-core-data';
import { Observable } from 'rxjs';
import { FormsFormQueryBuilder } from './forms-formquery-builder';

@Component({
  selector: 'ce-admin-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers: [
    CeFormQueryService,
  ]
})
export class FormsComponent implements OnInit {

  @Input() formWrapper!: FormWrapper;
  @Output() formChanges = new EventEmitter<FormWrapper>();

  formsDataSource!: FormWrappersDataSource;
  forms$!: Observable<readonly FormWrapper[]>;

  formQueryBuilder: FormsFormQueryBuilder = new FormsFormQueryBuilder();

  constructor(
    private readonly queryService: CeFormQueryService<FormWrapper>,
    private route: ActivatedRoute,
    private router: Router,
    private layout: LayoutService,
    private formsService: CeFormsService,
    private bcService: CeBreadcrumbsService,
  ) {
    this.bcService.setItems([]);
    this.formsDataSource = new FormWrappersDataSource(this.formsService);
    this.queryService.setDatasource(this.formsDataSource);
  }

  ngOnInit() {
    this.prepareQueryService();
  }

  reloadForms() {
    this.queryService.load();
  }

  async copy(form: FormWrapper) {
    try {
      const newForm = await this.formsService.copyForm(form.core.id);
      this.layout.showSingleMessage(`Le copie du formulaire de type ${newForm.root} à été créé.`);
      this.router.navigate(['home', 'forms', 'forms', newForm.id]);
    } catch (err) {
      this.layout.showErrorMessage(`Erreur lors de la copie d'un formulaire`);
    }
  }

  onSelected(form: FormWrapper) {
    this.router.navigate([form.core.id], { relativeTo: this.route });
  }

  async delete(form: FormWrapper) {
    try {
      await this.formsService.deleteForm(form.core.id);
      this.layout.showSingleMessage(`Formulaire supprimé avec succès`);
      this.formsDataSource.reload();
    } catch (err) {
      this.layout.showErrorMessage(`Erreur lors de la suppression du formulaire`);
    }
  }

  private async prepareQueryService() {
    this.queryService.setQueryBuilder(this.formQueryBuilder);
    this.queryService.setModel(null as any);
    this.forms$ = this.queryService.connect();
    this.queryService.load();
  }
}
