import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CeListModule, CeNavigationModule,
  CeNgReallyModule, ListItemStoreService,
  SearchDefaultQueryFactoryService
} from '@codeffekt/ce-core';
import { FormAccount } from '@codeffekt/ce-core-data';
import { ListItemAccountComponent } from '../list-item-account/list-item-account/list-item-account.component';
import { FormRootCollectionModule } from '../forms-root/form-root-collection/form-root-collection.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { UserTopbarComponent } from './user-topbar/user-topbar.component';
import { MatIconModule } from '@angular/material/icon';
import { UsersRoutingModule } from './users-routing.module';
import { UsersMainComponent } from './users-main/users-main.component';
import { MainHomeModule } from '../main/main-home';

@NgModule({
  declarations: [
    UserTopbarComponent,
    UsersMainComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatDialogModule,
    CeListModule,
    CeNgReallyModule,
    CeNavigationModule,
    FormRootCollectionModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
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
