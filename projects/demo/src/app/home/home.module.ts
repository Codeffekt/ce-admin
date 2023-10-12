import { NgModule } from '@angular/core';
import { CeBarcodeModule } from '@codeffekt/ce-barcode';
import { CeFormCoordinatesModule } from '@codeffekt/ce-form-coordinates';

@NgModule({
  imports: [
    CeFormCoordinatesModule,
    CeBarcodeModule,
  ],
  providers: [],
})
export class HomeModule { }
 