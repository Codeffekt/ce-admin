import { NgModule } from "@angular/core";
import { FormRootCollectionComponent } from "./form-root-collection.component";
import {
    CeFormQueryWrapperModule, CeLayoutModule,
    CeListModule, CeNavigationAccountModule,
    CeNavigationModule, CeNgReallyModule
} from "@codeffekt/ce-core";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [
        FormRootCollectionComponent,
    ],
    imports: [
        CommonModule,
        CeNavigationAccountModule,
        CeFormQueryWrapperModule,
        CeNgReallyModule,
        CeListModule,
        CeLayoutModule,
        CeNavigationModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
    ],
    exports: [
        FormRootCollectionComponent,
    ]
})
export class FormRootCollectionModule {
}