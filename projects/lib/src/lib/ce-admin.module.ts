import { ModuleWithProviders, NgModule } from '@angular/core';
import { CeAppConfig, CE_APP_CONFIG } from '@codeffekt/ce-core';
import { CeAdminDefaultRouteResolver } from './ce-admin-default-route.resolver';
import { CE_ADMIN_ROUTE_RESOLVER } from './ce-admin-route.resolver';

const appConfig: CeAppConfig = {
  projectType: "*",
  projectTypes: [{ projectType: "*", label: "default" }],
  title: "ce-admin",
  version: "dev",
};
@NgModule({
  imports: [        
  ],
  exports: [
  ],
  providers: [
    {
      provide: CE_ADMIN_ROUTE_RESOLVER,
      useClass: CeAdminDefaultRouteResolver
    },    
    {
      provide: CE_APP_CONFIG,
      useValue: appConfig
    },   
  ],
  declarations: [   
  ],
})
export class CeAdminModule {
  static forRoot(): ModuleWithProviders<CeAdminModule> {
    return {
      ngModule: CeAdminModule,
      providers: [              
      ]
    };
  }
}
