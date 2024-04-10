import { NgModule } from "@angular/core";
import { UserPasswordComponent } from "./user-password.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { CeLayoutModule } from "@codeffekt/ce-core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [
        UserPasswordComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CeLayoutModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
    ],
    exports: [
        UserPasswordComponent
    ]
})
export class UserPasswordModule {

}