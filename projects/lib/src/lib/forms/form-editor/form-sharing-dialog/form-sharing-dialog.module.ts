import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CeFormInputAutocompleteModule, CeFormInputAutocompleteStoreService, CeFormQueryWrapperModule, CeFormsPipesModule, CeLayoutModule, CeListModule, CeNgReallyModule, CePipesModule, ListItemStoreService } from '@codeffekt/ce-core';
import { FormSharingDialogComponent } from './form-sharing-dialog.component';
import { FormUserAutocompleteItemComponent } from './form-user-autocomplete-item/form-user-autocomplete-item.component';
import { FormUserSharingListItemComponent } from './form-user-sharing-list-item/form-user-sharing-list-item.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    FormSharingDialogComponent,
    FormUserAutocompleteItemComponent,
    FormUserSharingListItemComponent
  ],
  imports: [
    CommonModule,
    CeLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatAutocompleteModule,
    CeListModule,
    CeFormInputAutocompleteModule,
    MatMenuModule,    
    CePipesModule,
    CeNgReallyModule,
    CeFormQueryWrapperModule,
    CeFormsPipesModule
  ],
  exports: [
    FormSharingDialogComponent,
  ]
})
export class CeFormSharingDialogModule {

  constructor(
    listItemStore: ListItemStoreService,
    autocompleteItemStore: CeFormInputAutocompleteStoreService) {

    autocompleteItemStore.setComponents({
      'forms-account': FormUserAutocompleteItemComponent
    });

    listItemStore.setComponents({
      'forms-sharing': {
        useClass: FormUserSharingListItemComponent
      }
    });
  }
}
