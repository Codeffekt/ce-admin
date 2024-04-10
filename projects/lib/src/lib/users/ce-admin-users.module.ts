import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  
  ListItemStoreService,
  SearchDefaultQueryFactoryService
} from '@codeffekt/ce-core';
import { FormAccount } from '@codeffekt/ce-core-data';
import { ListItemAccountComponent } from '../list-item-account/list-item-account/list-item-account.component';
import { CeAdminUsersRoutingModule } from './ce-admin-users-routing.module';
import { MainHomeModule } from '../main/main-home';
import { UserEditorModule } from './user-editor';
import { UserCreationModule } from './user-creation';
import { UsersModule } from './users';
@NgModule({  
  imports: [
    CommonModule,
    CeAdminUsersRoutingModule,
    UsersModule,
    UserEditorModule,
    UserCreationModule,
    MainHomeModule,
  ],
  exports: [
  ]
})
export class CeAdminUsersModule {

  constructor(
    listItemStore: ListItemStoreService,
    searchDefaultQueryFactory: SearchDefaultQueryFactoryService
  ) {

    searchDefaultQueryFactory.setDefaultQueryFields({
      'forms-account': [{ field: 'login', operator: '~~*' }]
    })

    listItemStore.setComponents({
      [FormAccount.ROOT]: {
        useClass: ListItemAccountComponent,
      }
    });

  }

}
