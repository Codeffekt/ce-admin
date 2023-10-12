import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { CeFormQueryService, CeFormsService, FormQueryBuilder, FormQueryDatasource, FormWrappersDataSource } from '@codeffekt/ce-core';
import { FormAccountWrapper, FormInstance, FormSharingWrapper, IndexType } from '@codeffekt/ce-core-data';
import { Observable } from 'rxjs';
import { UserShareableFormQueryBuilder } from '../../form-users-shared';
import { FormEditorSharingService } from '../form-editor-sharing.service';

export interface FormSharingsDialogConfig {
  filterForms: IndexType[];
  form: FormInstance
}

@Component({
  selector: 'ce-form-sharing-dialog',
  templateUrl: './form-sharing-dialog.component.html',
  styleUrls: ['./form-sharing-dialog.component.scss'],
  providers: [
    CeFormQueryService,
    FormEditorSharingService
  ]
})
export class FormSharingDialogComponent implements OnInit {

  static createDialog(config: FormSharingsDialogConfig): MatDialogConfig {
    return {
      width: "800px",
      maxHeight: "80%",
      height: '1000px',
      data: config
    };
  }

  userDatasource!: FormQueryDatasource;
  userQueryBuilder!: FormQueryBuilder;
  formsSharing$!: Observable<readonly FormSharingWrapper[]>;

  constructor(
    private formsService: CeFormsService,
    private formEditorSharingService: FormEditorSharingService,
    @Inject(MAT_DIALOG_DATA) public config: FormSharingsDialogConfig,
    private dialogRef: MatDialogRef<FormSharingDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.initFormUserDataSource();
    this.initFormSharingDataSource();
  }

  private initFormUserDataSource() {
    this.userDatasource = new FormWrappersDataSource(this.formsService);
    this.userQueryBuilder = UserShareableFormQueryBuilder.forForm(this.config.form);
  }

  private initFormSharingDataSource() {
    this.formsSharing$ = this.formEditorSharingService.listenToSharings(this.config.form);
  }

  submit() {
    this.dialogRef.close();
  }

  addUser(user: FormAccountWrapper) {
    this.formEditorSharingService.addFormSharing(this.config.form, user);
  }

  async removeUser(form: FormSharingWrapper) {
    this.formEditorSharingService.removeFormSharing(form);
  }
}
