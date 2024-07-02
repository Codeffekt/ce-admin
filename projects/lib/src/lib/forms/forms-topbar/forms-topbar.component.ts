import { Component } from '@angular/core';
import { BarCode } from '@codeffekt/ce-core-data';
import { FormCreatorDialogComponent } from '../form-creator-dialog/form-creator-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CeFormsService, LayoutService } from '@codeffekt/ce-core';
import { Router } from '@angular/router';
import { BarcodeScannerComponent } from '@codeffekt/ce-barcode';

@Component({
  selector: 'lib-forms-topbar',
  templateUrl: './forms-topbar.component.html',
  styleUrls: ['./forms-topbar.component.css']
})
export class FormsTopbarComponent {  

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private layout: LayoutService,
    private formsService: CeFormsService,
  ) {

  }

  create() {
    const dialogRef = this.dialog.open(FormCreatorDialogComponent, {
      width: '40%'
    });

    dialogRef.afterClosed().subscribe(async (formConfig) => {
      if (formConfig) {
        try {
          const newForm = await this.formsService.createForm(formConfig.root);
          this.layout.showSingleMessage(`Le formulaire de type ${newForm.root} à été créé.`);          
          this.router.navigate(['home', 'forms', 'forms', newForm.id]);
        } catch (err) {
          this.layout.showErrorMessage(`Erreur lors de la création d'un nouveau formulaire`);
        }
      }
    });
  }

  open_qr_scanner() {
    const dialogRef = BarcodeScannerComponent.openDialog(this.dialog, { useConfirmationDialog: false });

    dialogRef.afterClosed().subscribe((barcode: Pick<BarCode, "text" | "type">) => {
      if (barcode && barcode.text.length) {
        this.router.navigate(['home', 'forms', 'forms', barcode.text]);
      }
    });
  }
}
