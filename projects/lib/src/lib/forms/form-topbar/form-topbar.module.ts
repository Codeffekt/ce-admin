import { NgModule } from "@angular/core";
import { FormTopbarComponent } from "./form-topbar.component";
import { CommonModule } from "@angular/common";
import { CeNavigationModule, CeNgReallyModule } from "@codeffekt/ce-core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
    declarations: [
        FormTopbarComponent,
    ],
    imports: [
        CommonModule,
        CeNavigationModule,
        CeNgReallyModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
    ],
    exports: [
        FormTopbarComponent,
    ]
})
export class FormTopbarModule {

}