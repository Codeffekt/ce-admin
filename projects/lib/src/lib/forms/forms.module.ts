import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import {
  CeFormDataService, CeFormRouteResolver, CeFormsModule,
  FormActionBuilder,
  FormActionService,
  FormsLocalDatabaseService,
  ListItemStoreService
} from '@codeffekt/ce-core';
import { FormDataService } from '../services/form-data.service';
import { ListItemProjectModule } from '../list-item-project/list-item-project.module';
import { ListItemProjectComponent } from '../list-item-project/list-item-project/list-item-project.component';
import { FormProject } from '@codeffekt/ce-core-data';
import { CeAdminAuthZModule } from '../authz';
import { FormRouteResolver } from '../services/form-route.resolver';
import { FormTopbarComponent } from './form-topbar/form-topbar.component';
import { FormToolbarComponent } from './form-toolbar/form-toolbar.component';
import { SubFormModule } from './subform';
import { FormHomeModule } from './form-home';
import { AdminFormsRoutingModule } from './forms-routing.module';
import { FormsModule } from './forms/forms.module';
import { FormTopbarModule } from './form-topbar/form-topbar.module';
import { FormToolbarModule } from './form-toolbar/form-toolbar.module';

@NgModule({
  declarations: [    
  ],
  imports: [
    CommonModule,        
    AdminFormsRoutingModule,    
    CeFormsModule,    
    ListItemProjectModule,
    CeAdminAuthZModule,            
    SubFormModule,
    FormHomeModule, 
    FormsModule,   
    FormTopbarModule,
    FormToolbarModule,    
  ],
  exports: [      
  ],
  providers: [
    {
      provide: CeFormDataService,
      useClass: FormDataService
    },
    {
      provide: CeFormRouteResolver,
      useClass: FormRouteResolver,
    },
  ]
})
export class CeAdminFormsModule {

  constructor(
    listItemStore: ListItemStoreService,
    formActions: FormActionService,
    localDatabase: FormsLocalDatabaseService
  ) {

    listItemStore.setComponents({
      [FormProject.ROOT]: {
        useClass: ListItemProjectComponent,
      }
    });

    formActions.setActions({      
      'form-forms': FormActionBuilder
        .withRender(FormsComponent)        
        .setTopbar(FormTopbarComponent),             
      'forms-trias-hardware': FormActionBuilder
        .withToolbar(FormToolbarComponent),        
    });

    localDatabase.setForms({            
      'forms': {
        id: 'forms',
        title: 'Formulaires',
        ctime: Date.now(),
        valid: true,
        root: 'form-forms',
        content: {}
      },      
    });
  }

}
