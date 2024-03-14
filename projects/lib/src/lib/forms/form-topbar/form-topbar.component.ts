import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BarCode, FormWrapper } from '@codeffekt/ce-core-data';
import { FormCreatorDialogComponent } from '../form-creator-dialog/form-creator-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { LayoutService } from '@codeffekt/ce-core';
import { Router } from '@angular/router';
import { BarcodeScannerComponent } from '@codeffekt/ce-barcode';

@Component({
  selector: 'lib-form-topbar',
  templateUrl: './form-topbar.component.html',
  styleUrls: ['./form-topbar.component.css']
})
export class FormTopbarComponent {

  @Input() formWrapper!: FormWrapper;
  @Output() formChanges = new EventEmitter<FormWrapper>();

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private layout: LayoutService,
  ) {

  }

  create() {
    const dialogRef = this.dialog.open(FormCreatorDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(async (formConfig) => {
      if (formConfig) {
        try {
          this.router.navigate(['formsroot', 'new', formConfig.root]);
        } catch (err) {
          this.layout.showErrorMessage(`Erreur lors de la création d'un nouveau formulaire`);
        }
      }
    });
  }

  open_qr_scanner() {
    const dialogRef = BarcodeScannerComponent.openDialog(this.dialog);

    dialogRef.afterClosed().subscribe((barcode: Pick<BarCode, "text" | "type">) => {
      if (barcode && barcode.text.length) {
        this.router.navigate(['forms', 'edit', barcode.text]);
      }
    });
  }
}
