import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { CeListModule, CeNgReallyModule, ListItemStoreService, SearchDefaultQueryFactoryService } from '@codeffekt/ce-core';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { FormAccount } from '@codeffekt/ce-core-data';
import { ListItemAccountComponent } from '../list-item-account/list-item-account/list-item-account.component';
import { FormRootCollectionModule } from '../forms-root/form-root-collection/form-root-collection.module';

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
