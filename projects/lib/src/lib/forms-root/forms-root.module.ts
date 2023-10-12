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
import { FormRootCollectionComponent } from './form-root-collection/form-root-collection.component';
import { FormDataService } from "../services/form-data.service";

@NgModule({
  declarations: [
    FormsRootComponent,
    FormRootEditorComponent,
    ListItemFormRootComponent,
    FormEditorDialogWrapperComponent,
    FormRootCollectionComponent
  ],
  imports: [
    CommonModule,
    FormsRootRoutingModule,
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
    CeFormCreatorModule,
    CeLayoutModule
  ],
  exports: [
    FormsRootComponent,
    FormRootEditorComponent,
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
      ["root"]: ListItemFormRootComponent
    });

  }

}