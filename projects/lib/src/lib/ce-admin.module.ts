import { ModuleWithProviders, NgModule } from '@angular/core';
import { CeAppConfig, CE_APP_CONFIG, FormActionDefault } from '@codeffekt/ce-core';
import { CeAdminModuleConfig, CE_ADMIN_CONFIG, EMPTY_CE_ADMIN_CONFIG } from './ce-admin-config';
import { CeAdminDefaultRouteResolver } from './ce-admin-default-route.resolver';
import { CE_ADMIN_ROUTE_RESOLVER } from './ce-admin-route.resolver';
import { CeAdminActionDefaultService } from './services/admin-action-default.service';

const appConfig: CeAppConfig = {
  projectType: "*",
  projectTypes: [{ projectType: "*", label: "default" }],
  title: "ce-admin",
  version: "dev",
};
@NgModule({
  imports: [    
    // CeAdminMainModule
  ],
  exports: [
  ],
  providers: [
    {
      provide: CE_ADMIN_ROUTE_RESOLVER,
      useClass: CeAdminDefaultRouteResolver
    },
    {
      provide: CE_ADMIN_CONFIG,
      useValue: EMPTY_CE_ADMIN_CONFIG
    },
    {
      provide: CE_APP_CONFIG,
      useValue: appConfig
    },
    {
      provide: FormActionDefault,
      useClass: CeAdminActionDefaultService,
    },
    /* {
      provide: APP_INITIALIZER,
      useFactory: CeAdminMenuService.init,
      multi: true,
      deps: [Router, CeAdminMenuService]
    },    */ 
  ],
})
export class CeAdminModule {
  static forRoot(config: CeAdminModuleConfig = EMPTY_CE_ADMIN_CONFIG): ModuleWithProviders<CeAdminModule> {
    return {
      ngModule: CeAdminModule,
      providers: [
        {
          provide: CE_ADMIN_CONFIG,
          useValue: config
        },        
      ]
    };
  }
}
