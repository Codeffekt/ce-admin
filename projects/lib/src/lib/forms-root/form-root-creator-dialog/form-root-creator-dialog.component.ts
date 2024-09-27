import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogConfig, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

export type FormRootCreatorConfig = {
  root: string|undefined;
}

@UntilDestroy()
@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  selector: 'lib-form-root-creator-dialog',
  templateUrl: './form-root-creator-dialog.component.html',
  styleUrls: ['./form-root-creator-dialog.component.css']
})
export class FormRootCreatorDialogComponent implements OnInit {

  formConfig: FormRootCreatorConfig = {
    root: undefined
  };

  formGroup!: UntypedFormGroup;  

  static createDialog(): MatDialogConfig {   
    
    return {
      width: "350px",      
    };
  }

  constructor(
    private fb: UntypedFormBuilder,
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
