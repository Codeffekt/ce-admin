import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CeAdminSpacesModule } from "@codeffekt/ce-admin";
import { CePlotlyModule } from "@codeffekt/ce-form-plotly";

@NgModule({
    imports: [
        CommonModule,
        CePlotlyModule,
        CeAdminSpacesModule,
    ]
})
export class SpacesModule {

}