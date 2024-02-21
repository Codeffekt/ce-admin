import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { CeCodeEditorModule } from "@codeffekt/ce-code-editor";
import {
  CeFormDataService, CeFormQueryWrapperModule, CeFormRouteResolver,
  CeFormsModule,
  CeLayoutModule,
  CeListModule,
  CeNavigationModule,
  CeNgReallyModule,
  CePipesModule,
  CeProjectFormRouteResolver,
  ListItemStoreService,
} from "@codeffekt/ce-core";
import { FormRootEditorComponent } from "./form-root-editor/form-root-editor.component";
import { FormsRootRoutingModule } from "./forms-root-routing.module";
import { FormsRootComponent } from "./forms-root/forms-root.component";
import { ListItemFormRootComponent } from './list-item-form-root/list-item-form-root.component';
import { CeFormCreatorModule } from '@codeffekt/ce-form-creator';
import { FormEditorDialogWrapperComponent } from "./form-editor-dialog-wrapper/form-editor-dialog-wrapper.component";
import { FormDataService } from "../services/form-data.service";
import { FormRootCreatorDialogComponent } from './form-root-creator-dialog/form-root-creator-dialog.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { FormRootCollectionModule } from "./form-root-collection/form-root-collection.module";
import { FormRootNewModule } from "./form-root-new";
import { UserEditorModule } from "../users/user-editor/user-editor.module";

@NgModule({
  declarations: [
    FormsRootComponent,
    FormRootEditorComponent,
    ListItemFormRootComponent,
    FormEditorDialogWrapperComponent,    
    FormRootCreatorDialogComponent
  ],
  imports: [
    CommonModule,
    FormsRootRoutingModule,
    FormRootCollectionModule,
    FormRootNewModule,
    ReactiveFormsModule,
    CeCodeEditorModule,
    CeFormsModule,
    CeNavigationModule,
    CeFormQueryWrapperModule,
    CeNgReallyModule,
    CeListModule,
    CePipesModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    CeFormCreatorModule,
    CeLayoutModule,
    UserEditorModule,
  ],
  exports: [
    FormsRootComponent,
    FormRootEditorComponent,
    FormRootCreatorDialogComponent,
  ],
  providers: [
    {
      provide: CeFormDataService,
      useClass: FormDataService
    },
    {
      provide: CeFormRouteResolver,
      useClass: CeProjectFormRouteResolver,
    }
    /* {
      provide: CeFormRouteResolver,
      useClass: FormRootRouteResolver
    },
    {
      provide: CeFormDataService,
      useClass: FormRootDataService
    } */
  ]
})
export class FormsRootModule {

  constructor(listItemStore: ListItemStoreService) {

    listItemStore.setComponents({
      ["root"]: {
        useClass: ListItemFormRootComponent
      }
    });

  }

}