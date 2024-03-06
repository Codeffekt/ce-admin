import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CeFormQueryService, CeFormsService, FormWrappersDataSource, LayoutService } from '@codeffekt/ce-core';
import { FormRoot, FormWrapper } from '@codeffekt/ce-core-data';
import { Observable, firstValueFrom, map } from 'rxjs';
import { FormRootCollectionQueryBuilder } from './form-root-collection-query-builder';
import { ProjectCreatorDialogComponent } from '../../projects/project-creator-dialog/project-creator-dialog.component';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';

@Component({
  selector: 'lib-form-root-collection',
  templateUrl: './form-root-collection.component.html',
  styleUrls: ['./form-root-collection.component.css'],
  providers: [
    CeFormQueryService
  ]
})
export class FormRootCollectionComponent implements OnInit {

  formRoot!: FormRoot;
  forms$!: Observable<readonly FormWrapper[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private layout: LayoutService,
    private formsService: CeFormsService,
    private readonly queryService: CeFormQueryService<FormWrapper>,
  ) {
    this.queryService.setDatasource(new FormWrappersDataSource(formsService));
  }

  ngOnInit(): void {
    this.retrieveFormRoot();
  }

  onSelected(form: FormWrapper) {
    this.router.navigate([form.core.id], { relativeTo: this.route });
  }

  async createForm() {

    const dialogRef = ProjectCreatorDialogComponent.createDialog(this.dialog, {
      root: this.formRoot.id,
    });

    const dialogRes = await firstValueFrom(dialogRef.afterClosed());

    if (dialogRes) {
      try {

        const newForm = dialogRes?.id ?
          await this.formsService.createForm(dialogRes.id) :
          await this.formsService.createForm(this.formRoot.id);
        this.layout.showSingleMessage(`Le formulaire à été créé.`);
        this.router.navigate([newForm.id], { relativeTo: this.route });
      } catch (err) {
        this.layout.showErrorMessage(`Erreur lors de la création d'un nouveau projet`);
      }
    }

  }

  async delete(form: FormWrapper) {
    try {
      await this.formsService.deleteForm(form.core.id);
      this.layout.showSingleMessage(`Formulaire supprimé avec succès`);
      this.queryService.load();
    } catch (err) {
      this.layout.showErrorMessage(`Erreur lors de la suppression du formulaire`);
    }
  }

  private async retrieveFormRoot() {
    this.formRoot = await firstValueFrom(this.route.data.pipe(
      map(data => data.form),
    ));
    this.prepareQueryService();
  }

  private async prepareQueryService() {
    this.queryService.setQueryBuilder(
      FormRootCollectionQueryBuilder.fromRoot(this.formRoot.id)
    );
    this.queryService.setModel(this.formRoot);
    this.forms$ = this.queryService.connect();
    this.queryService.load();
  }

}
