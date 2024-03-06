import { Component, Input, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { CeFormQueryService, LayoutService } from '@codeffekt/ce-core';
import { FormAccountWrapper, FormInstance } from '@codeffekt/ce-core-data';
import { Observable, filter } from 'rxjs';
import { FormSelectionDialogComponent } from '../../form-selection-dialog/form-selection-dialog.component';
import { UserShareableFormQueryBuilder } from '../../form-users-shared';
import { CeFormEditorOwnerService } from '../form-editor-owner.service';

@Component({
  selector: 'ce-form-editor-details',
  templateUrl: './form-editor-details.component.html',
  styleUrls: ['./form-editor-details.component.scss'],
  providers: [
    CeFormQueryService,
    CeFormEditorOwnerService]
})
export class FormEditorDetailsComponent implements OnInit {

  @Input() form!: FormInstance;

  formOwner$!: Observable<FormAccountWrapper>;

  constructor(
    private dialog: MatDialog,
    private layout: LayoutService,
    private formOwnerService: CeFormEditorOwnerService
  ) { }

  ngOnInit(): void {
    this.listenFormOwner();
  }

  onEditUserOwner() {
    const ref = this.dialog.open(
      FormSelectionDialogComponent,
      FormSelectionDialogComponent.createDialog({
        filterForms: [],
        mainTitle: "Sélection du nouveau créateur",
        listTitle: "Liste des utilisateurs",
        queryBuilder: UserShareableFormQueryBuilder.forForm(this.form),
      })
    );

    ref.afterClosed()
      .pipe(filter(selectedUser => selectedUser !== undefined))
      .subscribe(selectedUser => this.changeOwner(selectedUser));
  }

  private listenFormOwner() {
    this.formOwner$ = this.formOwnerService.listenToFormOwner(this.form);
  }

  private async changeOwner(user: FormAccountWrapper) {
    try {
      await this.formOwnerService.updateFormOwner(this.form, user);
      this.layout.showSingleMessage(`Nouveau créateur ${user.props.login}`);
    } catch (error) {
      this.layout.showErrorMessage(`Erreur <${error}> lors du changement de créateur`);
    }
  }
}
