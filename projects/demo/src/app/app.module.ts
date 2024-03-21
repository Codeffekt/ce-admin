import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CeAuthModule,
  CeCoreModule,
  FormActionDefault
} from '@codeffekt/ce-core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  CeAdminModule
} from '@codeffekt/ce-admin';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { HomeActionDefaultService } from './home/home-action-default.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgxsModule.forRoot([], {
      selectorOptions: {
        suppressErrors: false,
        injectContainerState: false
      }
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    CeAuthModule,
    CeCoreModule,
    CeAdminModule.forRoot(),
  ],
  providers: [
    {
      provide: FormActionDefault,
      useClass: HomeActionDefaultService,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
