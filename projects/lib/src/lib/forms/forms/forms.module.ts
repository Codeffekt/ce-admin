import { NgModule } from "@angular/core";
import { FormsComponent } from "./forms.component";
import { CommonModule } from "@angular/common";
import { CeFormQueryWrapperModule, CeListModule, CeNavigationModule, CeNgReallyModule } from "@codeffekt/ce-core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
    declarations: [
        FormsComponent,
    ],
    imports: [
        CommonModule,
        CeNavigationModule,
        CeFormQueryWrapperModule,
        CeNgReallyModule,
        CeListModule,
        MatButtonModule,
        MatMenuModule,
    ],
    exports: [
        FormsComponent,
    ]
})
export class FormsModule {

}