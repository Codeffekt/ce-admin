import { NgModule } from "@angular/core";
import { CeAdminSpacesRoutingModule } from "./ce-admin-spaces-routing.module";
import { MainHomeModule } from "../main/main-home";
import { CeFormDataService } from "@codeffekt/ce-core";
import { FormDataService } from "../services/form-data.service";

@NgModule({
    imports: [
        CeAdminSpacesRoutingModule,
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

}