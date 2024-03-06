import { Component, Input, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { CeFormQueryService, CeFormsService, LayoutService } from '@codeffekt/ce-core';
import { FormAccountWrapper, FormInstance, FormSharingWrapper, IndexType } from '@codeffekt/ce-core-data';
import { filter, Observable } from 'rxjs';
import { FormSharingService } from '../../services/form-sharing.service';
import { FormSelectionDialogComponent } from '../form-selection-dialog/form-selection-dialog.component';
import { FormSharingDatasource } from './form-sharing-datasource';
import { UserShareableFormQueryBuilder } from './user-shareable-formquery-builder';

@Component({
  selector: 'ce-admin-form-users-shared',
  templateUrl: './form-users-shared.component.html',
  styleUrls: ['./form-users-shared.component.scss'],
  providers: [CeFormQueryService]
})
export class FormUsersSharedComponent implements OnInit {

  @Input() form!: FormInstance;

  formsSharing$!: Observable<readonly FormSharingWrapper[]>;

  constructor(
    private dialog: MatDialog,
    private readonly formsService: CeFormsService,
    private readonly queryService: CeFormQueryService<FormSharingWrapper>,
    private formSharingService: FormSharingService,
    private layout: LayoutService,
  ) { }

  ngOnInit(): void {
    this.initDataSource();
  }

  openUsersSelectionDialog() {    
    const ref = this.dialog.open(
      FormSelectionDialogComponent,
      FormSelectionDialogComponent.createDialog({
        filterForms : [],
        mainTitle: "Sélection des utilisateurs à ajouter",
        listTitle: "Liste des utilisateurs",
        queryBuilder: UserShareableFormQueryBuilder.forForm(this.form),
      }));

    ref.afterClosed()
      .pipe(
        filter(selectedUser => selectedUser !== undefined)
      )
      .subscribe(selectedUser => this.addFormSharing(selectedUser));
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

  async addFormSharing(user: FormAccountWrapper) {
    try {
      await this.formSharingService.addFormSharing(user.props.login, this.form);
      this.layout.showSingleMessage(`${user.props.login} ajouté au partage`);
      this.reloadData();
    } catch (err) {
      this.layout.showErrorMessage(`Erreur <${err}> lors de l'ajout de l'utilisateur`);
    }
  }

  private initDataSource() {
    this.queryService.setQueryBuilder(
      this.formSharingService.createFormQueryBuilderForForm(this.form)
    );
    this.queryService.setDatasource(new FormSharingDatasource(this.formsService));
    this.formsSharing$ = this.queryService.connect();   
    this.queryService.load();
  }

  private reloadData() {
    this.queryService.load();
  }

}
