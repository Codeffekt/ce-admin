import { Component, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Router } from '@angular/router';
import { CeBreadcrumbsService, CeFormQueryService, CeFormsService, FormWrappersDataSource, LayoutService } from '@codeffekt/ce-core';
import { FormWrapper } from '@codeffekt/ce-core-data';
import { Observable } from 'rxjs';
import { FormCreatorDialogComponent } from '../form-creator-dialog/form-creator-dialog.component';
import { FormsFormQueryBuilder } from './forms-formquery-builder';

@Component({
  selector: 'ce-admin-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers: [
    CeFormQueryService
  ]
})
export class FormsComponent implements OnInit {

  formsDataSource!: FormWrappersDataSource;
  forms$!: Observable<readonly FormWrapper[]>;

  formQueryBuilder: FormsFormQueryBuilder = new FormsFormQueryBuilder();

  constructor(
    private readonly queryService: CeFormQueryService<FormWrapper>,
    private router: Router,
    private dialog: MatDialog,
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

  create() {
    const dialogRef = this.dialog.open(FormCreatorDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(async (formConfig) => {
      if (formConfig) {
        try {
          this.router.navigate(['formsroot', 'new', formConfig.root]);
        } catch (err) {
          this.layout.showErrorMessage(`Erreur lors de la création d'un nouveau formulaire`);
        }
      }
    });
  }

  /* async copy(form: FormWrapper) {
    try {
      const newForm = await this.formsService.copyForm(form.core.id);
      this.layout.showSingleMessage(`Le copie du formulaire de type ${newForm.root} à été créé.`);
      this.router.navigate(['forms', 'edit', newForm.id]);
    } catch (err) {
      this.layout.showErrorMessage(`Erreur lors de la copie d'un formulaire`);
    }
  } */

  onSelected(form: FormWrapper) {
    this.router.navigate(['forms', 'edit', form.core.id]);
  }

  /* async delete(form: FormWrapper) {
    try {
      await this.formsService.deleteForm(form.core.id);
      this.layout.showSingleMessage(`Formulaire supprimé avec succès`);
      this.formsDataSource.reload();
    } catch (err) {
      this.layout.showErrorMessage(`Erreur lors de la suppression du formulaire`);
    }
  } */

  private async prepareQueryService() {
    this.queryService.setQueryBuilder(this.formQueryBuilder);
    this.queryService.setModel(null as any);
    this.forms$ = this.queryService.connect();
    this.queryService.load();
  }
}
