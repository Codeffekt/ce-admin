import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CeFormsService, PaginatorFilterDatasource } from '@codeffekt/ce-core';
import { DbArrayRes, FormInstanceBase, FormRoot } from '@codeffekt/ce-core-data';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

export interface FormCreatorDialogConfig {
  defaultRootValue?: string;
  datasource: PaginatorFilterDatasource<FormRoot>;
}

export type FormCreatorConfig = {
  root: string|undefined;
}

const SELECT_CHOICES_LIMIT = 50;

@UntilDestroy()
@Component({
  selector: 'lib-form-creator-dialog',
  templateUrl: './form-creator-dialog.component.html',
  styleUrls: ['./form-creator-dialog.component.css']
})
export class FormCreatorDialogComponent implements OnInit {

  formConfig: FormCreatorConfig = {
    root: undefined
  };

  rootTypes: FormInstanceBase[] = [];

  formGroup!: FormGroup;  

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormCreatorDialogComponent>,
    private formsService: CeFormsService,
    @Inject(MAT_DIALOG_DATA) private config: FormCreatorDialogConfig,
  ) { 
    //this.formConfig.root = config.defaultRootValue;    
  }

  ngOnInit(): void {
    this.createForm();    
    this.loadFormRoots();
  }

  dismiss() {
    this.dialogRef.close();
  }

  private createForm() {
    this.formGroup = this.fb.group({
      root: [this.formConfig.root, Validators.required]
    });

    this.formGroup.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(formConfig => this.formConfig = formConfig);
  }  

  private async loadFormRoots() {
    const res = await this.formsService.getRawFormsRootQuery({
      limit: SELECT_CHOICES_LIMIT
    }).toPromise() as DbArrayRes<FormInstanceBase>;
    this.rootTypes = res.elts;
  }

}
