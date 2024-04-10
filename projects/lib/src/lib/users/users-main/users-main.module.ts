import { NgModule } from "@angular/core";
import { UsersMainComponent } from "./users-main.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        UsersMainComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        UsersMainComponent,
    ]
})
export class UsersMainModule {

}