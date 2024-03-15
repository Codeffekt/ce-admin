import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormInstance, FormWrapper } from '@codeffekt/ce-core-data';
import { FormEditorJsonDialogComponent } from '../form-editor-json/form-editor-json.component';
import { FormsQrcodeDialogComponent } from '@codeffekt/ce-barcode';
import { filter } from 'rxjs';
import { FormEditorOperationsService } from '../form-editor/form-editor-operation.service';

@Component({
  selector: 'lib-form-toolbar',
  templateUrl: './form-toolbar.component.html',
  styleUrls: ['./form-toolbar.component.scss'],
  providers: [
    FormEditorOperationsService,
  ]
})
export class FormToolbarComponent {

  @Input() formWrapper!: FormWrapper;
  @Output() formChanges = new EventEmitter<FormWrapper>();  

  constructor(
    private dialog: MatDialog,
    private formOperationService: FormEditorOperationsService,
  ) {}

  openJSONEditor() {

    const ref = this.dialog.open(
      FormEditorJsonDialogComponent,
      FormEditorJsonDialogComponent.createDialog({ form: this.formWrapper.core })
    );

    ref.afterClosed()
      .pipe(
        filter(form => !!form)
      )
      .subscribe(form => this.save(form));
  }

  openBarcodeViewer() {
    FormsQrcodeDialogComponent.open(this.dialog,
      {
        formIds: [
          this.formWrapper.core.id
        ]
      });
  }

  save(form: FormInstance) {
    this.formOperationService.save(form);
  }
}
