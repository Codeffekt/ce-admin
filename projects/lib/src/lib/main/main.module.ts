import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { CeGridModule, CeOverflowModule, CeSideMenuModule } from '@codeffekt/ce-core';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,    
    CeSideMenuModule,
    CeGridModule,
    CeOverflowModule,
    PortalModule,
    MatSnackBarModule,
    MatSidenavModule,
  ],
  exports: [
    MainComponent,
  ],
  providers: [    
  ]
})
export class CeAdminMainModule {}
