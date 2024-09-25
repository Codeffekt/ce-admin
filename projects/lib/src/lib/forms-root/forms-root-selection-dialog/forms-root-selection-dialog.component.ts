import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormWrapper } from '@codeffekt/ce-core-data';
import { FormsRootSelectionComponent } from '../forms-root-selection/forms-root-selection.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-forms-root-selection-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsRootSelectionComponent,
    MatDialogModule,
    MatButtonModule,
  ],
  templateUrl: './forms-root-selection-dialog.component.html',
  styleUrls: ['./forms-root-selection-dialog.component.css']
})
export class FormsRootSelectionDialogComponent {

  static open(dialog: MatDialog) { 
    return dialog.open(FormsRootSelectionDialogComponent);
  }

  private dialogRef = inject(MatDialogRef<FormsRootSelectionDialogComponent>);
  currentSelection: FormWrapper|undefined;

  onSelectionChanges(form: FormWrapper) {
    this.currentSelection = form;
  }

  dismiss() {
    this.dialogRef.close();
  }  

}
