import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormInstance, FormSharingWrapper } from '@codeffekt/ce-core-data';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { FormEditorOperationsService } from '../form-editor-operation.service';
import { FormEditorSharingService } from '../form-editor-sharing.service';
import { FormSharingDialogComponent } from '../form-sharing-dialog/form-sharing-dialog.component';

@UntilDestroy()
@Component({
  selector: 'ce-form-user-sharings',
  templateUrl: './form-user-sharings.component.html',
  styleUrls: ['./form-user-sharings.component.scss'],
  providers: [FormEditorSharingService]
})
export class FormUserSharingsComponent implements OnInit, OnDestroy {

  @Input() form!: FormInstance;

  formsSharing$!: Observable<readonly FormSharingWrapper[]>;

  constructor(
    private dialog: MatDialog,
    private formEditorSharingService: FormEditorSharingService,
    private formEditorOperationService: FormEditorOperationsService
  ) { }

  ngOnInit(): void {
    this.listenToSharings();
    this.listenSharingOperationEnd();
  }

  ngOnDestroy(): void { }

  onAddSharing() {
    const ref = this.dialog.open(
      FormSharingDialogComponent,
      FormSharingDialogComponent.createDialog({
        filterForms: [],
        form: this.form
      }));

    ref.afterClosed()
      .subscribe(_ => this.formEditorSharingService.reloadSharings());
  }

  private listenToSharings() {
    this.formsSharing$ = this.formEditorSharingService.listenToSharings(this.form);
  }

  private listenSharingOperationEnd() {
    this.formEditorOperationService
      .onSharingOperationEnded()
      .subscribe(_ => this.formEditorSharingService.reloadSharings());
  }
}
