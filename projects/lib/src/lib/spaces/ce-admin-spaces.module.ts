import { NgModule } from "@angular/core";
import { CeAdminSpacesRoutingModule } from "./ce-admin-spaces-routing.module";
import { MainHomeModule } from "../main/main-home";
import { CeFormDataService, ListItemStoreService } from "@codeffekt/ce-core";
import { FormDataService } from "../services/form-data.service";
import { FormSpaceEditorFormat } from "@codeffekt/ce-core-data";
import { ListItemSpaceComponent } from "./list-item-space";

@NgModule({
    imports: [
        CeAdminSpacesRoutingModule,
        ListItemSpaceComponent,
        MainHomeModule,       
    ],
    providers: [
        {
            provide: CeFormDataService,
            useClass: FormDataService
          }, 
    ],   
})
export class CeAdminSpacesModule {

    constructor(
        listItemStore: ListItemStoreService,
    ) {

        listItemStore.setComponents({
            [FormSpaceEditorFormat.ROOT]: {
                useClass: ListItemSpaceComponent
            }
        });

    }

}