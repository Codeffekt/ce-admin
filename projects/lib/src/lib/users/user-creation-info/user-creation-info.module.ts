import { NgModule } from "@angular/core";
import { UserCreationInfoComponent } from "./user-creation-info.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { CeGridModule, CeLayoutModule, CeSectionModule } from "@codeffekt/ce-core";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [
        UserCreationInfoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        CeSectionModule,
        CeLayoutModule,
        CeGridModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
    ],
    exports: [
        UserCreationInfoComponent,
    ]
})
export class UserCreationInfoModule {

}