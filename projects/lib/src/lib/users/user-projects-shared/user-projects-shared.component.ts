import { Component, Input, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import {
  CeFormQueryService,
  CeFormsService,
  LayoutService
} from '@codeffekt/ce-core';
import { FormWrapper, FormSharingWrapper, FormProject, FormAccountWrapper } from '@codeffekt/ce-core-data';
import { filter, Observable } from 'rxjs';
import { FormShareableFormQueryBuilder } from '../../forms/form-users-shared/form-shareable-formquery-builder';
import { FormSharingDatasource } from '../../forms/form-users-shared/form-sharing-datasource';
import { FormSelectionDialogComponent } from '../../forms/form-selection-dialog/form-selection-dialog.component';
import { FormSharingService } from '../../services/form-sharing.service';

@Component({
  selector: 'ce-admin-user-projects-shared',
  templateUrl: './user-projects-shared.component.html',
  styleUrls: ['./user-projects-shared.component.scss'],
  providers: [CeFormQueryService]
})
export class UserProjectsSharedComponent implements OnInit {

  @Input() account!: FormAccountWrapper;

  formsSharing$!: Observable<readonly FormSharingWrapper[]>;

  constructor(
    private dialog: MatDialog,
    private readonly formsService: CeFormsService,
    private readonly queryService: CeFormQueryService<FormSharingWrapper>,
    private formSharingService: FormSharingService,
    private layout: LayoutService,
  ) { }

  ngOnInit() {
    this.initDataSource();
  }

  openProjectsSelectionDialog() {        
    const ref = this.dialog.open(
      FormSelectionDialogComponent,
      FormSelectionDialogComponent.createDialog({
        filterForms: [],
        mainTitle: 'Sélection du projet à ajouter',
        listTitle: 'Liste des projets',
        queryBuilder: FormShareableFormQueryBuilder.forRoot(this.account, FormProject.ROOT),
      }));

    ref.afterClosed()
      .pipe(
        filter((selectedProject: FormWrapper) => selectedProject !== undefined)
      )
      .subscribe(selectedProject => this.addProject(selectedProject));
  }

  private async addProject(project: FormWrapper) {
    try {
      await this.formSharingService.addFormSharing(this.account.props.login, project.core);
      this.layout.showSingleMessage(`${project.props.name} ajouté au partage`);
      this.reloadData();
    } catch (err) {
      this.layout.showErrorMessage(`Erreur <${err}> lors de l'ajout du projet`);
    }
  }

  async removeFormSharing(formSharing: FormSharingWrapper) {
    try {
      await this.formSharingService.removeFormSharing(formSharing);
      this.layout.showSingleMessage(`${formSharing.props.login} supprimé du partage`);
      this.reloadData();
    } catch (err) {
      this.layout.showErrorMessage(`Erreur <${err}> lors de la suppression du partage`);
    }
  }

  private initDataSource() {
    this.queryService.setQueryBuilder(
      this.formSharingService.createFormQueryBuilderForUser(this.account, FormProject.ROOT)
    );
    this.queryService.setDatasource(new FormSharingDatasource(this.formsService));
    this.formsSharing$ = this.queryService.connect();    
    this.queryService.load();
  }

  private reloadData() {
    this.queryService.load();
  }

}
