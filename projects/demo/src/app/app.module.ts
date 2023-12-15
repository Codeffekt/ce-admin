import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CeAppConfig, CeAuthModule, CeCoreModule, CE_APP_CONFIG } from '@codeffekt/ce-core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CeAdminMenuEntry, CeAdminModule } from '@codeffekt/ce-admin';
import { CommonModule } from '@angular/common';

const appConfig: CeAppConfig = {
  projectType: "*",
  projectTypes: [
    { projectType: "*", label: "default" },    
    { projectType: "app.config", label: "App Config" }
  ],
  title: "ce-admin-demo",
  version: "dev",
};

const menuEntries: CeAdminMenuEntry[] = [
  {
    label: 'Example',
    icon: 'assignment',
    authz: { resource: 'forms', actions: ['all'] },
    route: {
      path: 'example',
      loadChildren: () => import('./module-example/module-example.module').then(m => m.ModuleExampleModule)
    }
  },
  {
    label: "Formulaires (custom)",
    icon: "assignment",
    route: {
      path: 'forms',
    },
    keepDefaultRoute: true,
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,    
    AppRoutingModule,
    BrowserAnimationsModule,
    CeAuthModule,
    CeCoreModule,
    CeAdminModule.forRoot({
      menuEntries,
      defaultRoutePath: 'projects'
    }),    
  ],
  providers: [
    {
      provide: CE_APP_CONFIG,
      useValue: appConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
