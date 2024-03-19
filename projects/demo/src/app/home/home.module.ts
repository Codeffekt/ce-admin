import { NgModule } from '@angular/core';
import { CeBarcodeModule } from '@codeffekt/ce-barcode';
import { CeFormCoordinatesModule } from '@codeffekt/ce-form-coordinates';
import { CommonModule } from '@angular/common';
import { CeAdminMainModule } from '@codeffekt/ce-admin';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,        
  ],
  providers: [],
})
export class HomeModule { }
 