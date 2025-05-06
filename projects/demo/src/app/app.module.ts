import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CeCoreModule,
  FormActionDefault
} from '@codeffekt/ce-core';
import {
  CeAdminModule
} from '@codeffekt/ce-admin';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { HomeActionDefaultService } from './home/home-action-default.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,    
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgxsModule.forRoot([], {
      selectorOptions: {
        suppressErrors: false,
        injectContainerState: false
      }
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    CeCoreModule.forRoot(),
    CeAdminModule.forRoot(),
  ],
  providers: [
    {
      provide: FormActionDefault,
      useClass: HomeActionDefaultService,
    },
  ],
})
export class AppModule { }
