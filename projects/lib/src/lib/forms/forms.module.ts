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
import { FormsTopbarComponent } from './forms-topbar/forms-topbar.component';
import { SubFormModule } from './subform';
import { FormHomeModule } from './form-home';
import { AdminFormsRoutingModule } from './forms-routing.module';
import { FormsModule } from './forms/forms.module';
import { FormsTopbarModule } from './forms-topbar/forms-topbar.module';
import { FormToolbarModule } from './form-toolbar/form-toolbar.module';
import { FormsToolbarModule } from './forms-toolbar/forms-toolbar.module';
import { FormsToolbarComponent } from './forms-toolbar/forms-toolbar.component';
import { FormTopbarModule } from './form-topbar/form-topbar.module';

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
    FormsTopbarModule,
    FormsToolbarModule,
    FormToolbarModule,  
    FormTopbarModule,  
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
        .setTopbar(FormsTopbarComponent)
        .setToolbar(FormsToolbarComponent),                           
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
