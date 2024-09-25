import { NgModule } from "@angular/core";
import { CeAdminSpacesRoutingModule } from "./ce-admin-spaces-routing.module";
import { MainHomeModule } from "../main/main-home";

@NgModule({
    imports: [
        CeAdminSpacesRoutingModule,
        MainHomeModule,       
    ],
})
export class CeAdminSpacesModule {

}