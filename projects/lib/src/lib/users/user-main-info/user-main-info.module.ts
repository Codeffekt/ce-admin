import { NgModule } from "@angular/core";
import { UserMainInfoComponent } from "./user-main-info.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CeLayoutModule, CeSectionModule } from "@codeffekt/ce-core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
    declarations: [
        UserMainInfoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CeLayoutModule,
        CeSectionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
    ],
    exports: [
        UserMainInfoComponent
    ]
})
export class UserMainInfoModule {

}