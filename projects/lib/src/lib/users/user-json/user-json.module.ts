import { NgModule } from "@angular/core";
import { UserJsonComponent } from "./user-json.component";
import { CommonModule } from "@angular/common";
import { CeCodeEditorModule } from "@codeffekt/ce-code-editor";

@NgModule({
    declarations: [
        UserJsonComponent
    ],
    imports: [
        CommonModule,
        CeCodeEditorModule,
    ],
    exports: [
        UserJsonComponent
    ]
})
export class UserJsonModule {

}