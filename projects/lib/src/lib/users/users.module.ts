import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { CeListModule, CeNgReallyModule, ListItemStoreService, SearchDefaultQueryFactoryService } from '@codeffekt/ce-core';
import { FormAccount } from '@codeffekt/ce-core-data';
import { ListItemAccountComponent } from '../list-item-account/list-item-account/list-item-account.component';
import { FormRootCollectionModule } from '../forms-root/form-root-collection/form-root-collection.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    CeListModule,
    CeNgReallyModule,
    FormRootCollectionModule,
    MatButtonModule,
    MatMenuModule,
    UsersRoutingModule,
  ],
  exports: [
  ]
})
export class UsersModule {

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
