import { NgModule } from "@angular/core";
import { FormRootCollectionComponent } from "./form-root-collection.component";
import {
    CeFormQueryWrapperModule, CeLayoutModule,
    CeListModule, CeNavigationAccountModule,
    CeNavigationModule, CeNgReallyModule
} from "@codeffekt/ce-core";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { MatLegacyMenuModule as MatMenuModule } from "@angular/material/legacy-menu";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";

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