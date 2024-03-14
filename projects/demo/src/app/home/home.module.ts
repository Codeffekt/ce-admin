import { NgModule } from '@angular/core';
import { CeBarcodeModule } from '@codeffekt/ce-barcode';
import { CeFormCoordinatesModule } from '@codeffekt/ce-form-coordinates';
import { CommonModule } from '@angular/common';
import { CeAdminMainModule } from '@codeffekt/ce-admin';

@NgModule({
  imports: [
    CommonModule,
    CeFormCoordinatesModule,
    CeBarcodeModule, 
    CeAdminMainModule,   
  ],
  providers: [],
})
export class HomeModule { }
 