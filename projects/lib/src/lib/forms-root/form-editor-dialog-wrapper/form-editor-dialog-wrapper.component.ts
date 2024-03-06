import { Component, Inject, OnInit } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogConfig as MatDialogConfig, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { FormInstance, FormInstanceBase, FormRoot } from '@codeffekt/ce-core-data';

export interface FormEditorDialogWrapperConfig {
  forms: FormRoot[];
}

const DEFAULT_CONFIG: FormEditorDialogWrapperConfig = {
  forms: []
}

@Component({
  selector: 'ce-form-editor-dialog-wrapper',
  templateUrl: './form-editor-dialog-wrapper.component.html',
  styleUrls: ['./form-editor-dialog-wrapper.component.scss']
})
export class FormEditorDialogWrapperComponent implements OnInit {

  static createDialog(data: FormEditorDialogWrapperConfig = DEFAULT_CONFIG): MatDialogConfig {

    if (!data.forms.length) {
      const newForm = this.createEmptyFormWrapper();
      data.forms = [newForm];
    }
    
    return {
      width: "90%",
      height: "90%",
      data
    };
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FormEditorDialogWrapperConfig,
    private dialogRef: MatDialogRef<FormEditorDialogWrapperComponent>) { }

  ngOnInit(): void {
    console.log(this.data.forms);
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSave(forms: FormRoot[]) {
    this.dialogRef.close(forms);
  }

  static createEmptyFormWrapper(): FormInstanceBase {
    const form: FormInstanceBase = {
      id: undefined as any,
      title: undefined as any,
      ctime: Date.now(),
      content: {}
    }

    return form;
  }
}
