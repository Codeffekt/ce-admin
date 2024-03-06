import { Component, Input, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { CeFormsService, LayoutService } from '@codeffekt/ce-core';
import { FormAccountWrapper, FormInstance, IndexType } from '@codeffekt/ce-core-data';
import { filter, map, Observable, startWith, Subject, switchMap } from 'rxjs';
import { FormSelectionDialogComponent } from '../form-selection-dialog/form-selection-dialog.component';
import { UserShareableFormQueryBuilder } from '../form-users-shared';

@Component({
  selector: 'ce-admin-form-user-owner',
  templateUrl: './form-user-owner.component.html',
  styleUrls: ['./form-user-owner.component.scss']
})
export class FormUserOwnerComponent implements OnInit {

  @Input() form!: FormInstance;

  owner$: Subject<IndexType | undefined> = new Subject();

  formOwner$!: Observable<FormAccountWrapper>;

  constructor(
    private dialog: MatDialog,
    private readonly formsService: CeFormsService,
    private layout: LayoutService,
  ) {
  }

  ngOnInit(): void {
    this.listenToOwner();
  }  

  changeOwner() {
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
      .pipe(
        filter(selectedUser => selectedUser !== undefined)
      )
      .subscribe(selectedUser => this.changeFormOwner(selectedUser));
  }

  private async changeFormOwner(newOwner: FormAccountWrapper) {
    try {
      this.form = await this.formsService.updateForm({
        ...this.form,
        author: newOwner.core.id
      });
      this.layout.showSingleMessage(`Nouveau créateur ${newOwner.props.login}`);
      this.updateOwner();
    } catch (err) {
      this.layout.showErrorMessage(`Erreur <${err}> lors du changement de créateur`);
    }
  }

  private async updateOwner() {
    this.owner$.next(this.form.author);
  }

  private listenToOwner() {
    this.formOwner$ = this.owner$.asObservable().pipe(
      startWith(this.form.author),
      filter(author => author !== undefined),
      switchMap(author => this.formsService.getForm(author!)),
      filter(form => form !== undefined),
      map(form => new FormAccountWrapper(form))
    );
  }
}
