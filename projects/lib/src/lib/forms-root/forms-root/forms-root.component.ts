import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CeFormQueryService, CeFormsService, FormsFormQueryBuilder, LayoutService } from '@codeffekt/ce-core';
import { FormWrapper } from '@codeffekt/ce-core-data';
import { Observable } from 'rxjs';
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

  @Input() formWrapper!: FormWrapper;
  @Output() formChanges = new EventEmitter<FormWrapper>();

  formsDataSource!: FormsRootDataSource;
  formQueryBuilder = new FormsFormQueryBuilder();
  forms$!: Observable<readonly FormWrapper[]>;

  constructor(
    private readonly queryService: CeFormQueryService<FormWrapper>,
    private route: ActivatedRoute,
    private router: Router,
    private layout: LayoutService,
    private formsService: CeFormsService) {
    this.formsDataSource = new FormsRootDataSource(this.formsService);
    this.queryService.setDatasource(this.formsDataSource);
  }

  ngOnInit() {
    this.prepareQueryService();
  }

  createInstance(form: FormWrapper) {
    this.router.navigate(['formsroot', 'new', form.core.id]);
  }

  collection(form: FormWrapper) {
    this.router.navigate(['formsroot', 'collection', form.core.id]);
  }

  edit(form: FormWrapper) {
    this.router.navigate([form.core.id], { relativeTo: this.route });
  }

  reloadForms() {
    this.formsDataSource.reload();
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
}
