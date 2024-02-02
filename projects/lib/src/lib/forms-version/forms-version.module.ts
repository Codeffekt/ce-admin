import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsVersionRoutingModule } from "./forms-version-routing.module";
import { FormsVersionComponent } from "./forms-version/forms-version.component";
import { FormsVersionEditorComponent } from "./forms-version-editor/forms-version-editor.component";
import { 
    CeFormQueryWrapperModule,
    CeFormsModule, CeListModule, CeNavigationModule, CeNgReallyModule, CePipesModule, CeTableModule, ListItemStoreService, 
} from "@codeffekt/ce-core";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { ListItemFormVersionComponent } from './list-item-form-version/list-item-form-version.component';

@NgModule({
    declarations: [
        FormsVersionComponent,
        FormsVersionEditorComponent,
        ListItemFormVersionComponent,
    ],
    imports: [
        CommonModule,
        FormsVersionRoutingModule,       
        CeNavigationModule,
        CeFormQueryWrapperModule,
        CeTableModule,
        CeFormsModule,        
        CePipesModule,
        CeListModule,
        CeNgReallyModule,
        MatTableModule,
        MatButtonModule,
    ],
    exports: [
        FormsVersionComponent,
        FormsVersionEditorComponent,
    ],
    providers: [
    ]
})
export class FormsVersionModule { 

    constructor(listItemStore: ListItemStoreService) {

        listItemStore.setComponents({
          'version': {
            useClass: ListItemFormVersionComponent,
          }
        });
    
      }

}