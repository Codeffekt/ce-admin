import { NgModule } from "@angular/core";
import { FormsToolbarComponent } from "./forms-toolbar.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        FormsToolbarComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        FormsToolbarComponent,
    ]
})
export class FormsToolbarModule {

}