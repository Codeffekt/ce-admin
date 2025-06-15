import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CeCodeEditorComponent } from '@codeffekt/ce-code-editor';
import { FormInstance } from '@codeffekt/ce-core-data';

export interface FormEditorJsonConfig {
  form: FormInstance;
}

@Component({
  selector: 'ce-form-editor-json',
  templateUrl: './form-editor-json.component.html',
  styleUrls: ['./form-editor-json.component.scss'],
  imports: [
    CommonModule,
    MatDialogModule,
    CeCodeEditorComponent,
    MatButtonModule,
  ]
})
export class FormEditorJsonDialogComponent implements OnInit {

  @ViewChild(CeCodeEditorComponent) codeEditor!: CeCodeEditorComponent;
  canSave: boolean = false;
  dialogOpened = false;

  static createDialog(data: FormEditorJsonConfig): MatDialogConfig {
    return {
      data
    };
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FormEditorJsonConfig,
    private dialogRef: MatDialogRef<FormEditorJsonDialogComponent>) {

      this.dialogRef.afterOpened().subscribe(() => setTimeout(() => this.dialogOpened = true, 0));

  }

  ngOnInit(): void {
  }

  dismiss() {
    this.dialogRef.close()
  }

  save() {
    const form = JSON.parse(this.codeEditor.code);
    this.dialogRef.close(form)
  }

  onCodeChanges(code: string) {
    this.canSave = this.codeEditor.undoable;
    console.log(this.canSave);
  }
}
