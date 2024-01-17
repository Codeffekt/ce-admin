import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

export type FormRootCreatorConfig = {
  root: string|undefined;
}

@UntilDestroy()
@Component({
  selector: 'lib-form-root-creator-dialog',
  templateUrl: './form-root-creator-dialog.component.html',
  styleUrls: ['./form-root-creator-dialog.component.css']
})
export class FormRootCreatorDialogComponent implements OnInit {

  formConfig: FormRootCreatorConfig = {
    root: undefined
  };

  formGroup!: FormGroup;  

  static createDialog(): MatDialogConfig {   
    
    return {
      width: "350px",      
    };
  }

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormRootCreatorDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.createForm();    
  }

  private createForm() {
    this.formGroup = this.fb.group({
      root: [this.formConfig.root, Validators.required]
    });

    this.formGroup.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(formConfig => this.formConfig = formConfig);
  }  

  dismiss() {
    this.dialogRef.close();
  }


}
