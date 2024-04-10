import { NgModule } from "@angular/core";
import { UserApiKeyComponent } from "./user-api-key.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { ClipboardModule } from "@angular/cdk/clipboard";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
    declarations: [
        UserApiKeyComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,    
        ClipboardModule,
        MatIconModule,
        MatDialogModule,
    ],
    exports: [
        UserApiKeyComponent
    ]
})
export class UserApiKeyModule {

}