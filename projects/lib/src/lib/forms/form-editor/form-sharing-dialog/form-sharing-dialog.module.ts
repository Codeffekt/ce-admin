import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { CeFormInputAutocompleteModule, CeFormInputAutocompleteStoreService, CeFormQueryWrapperModule, CeFormsPipesModule, CeLayoutModule, CeListModule, CeNgReallyModule, CePipesModule, ListItemStoreService } from '@codeffekt/ce-core';
import { FormSharingDialogComponent } from './form-sharing-dialog.component';
import { FormUserAutocompleteItemComponent } from './form-user-autocomplete-item/form-user-autocomplete-item.component';
import { FormUserSharingListItemComponent } from './form-user-sharing-list-item/form-user-sharing-list-item.component';

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
