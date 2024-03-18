import { Injectable } from "@angular/core";
import { FormActionDefault } from "@codeffekt/ce-core";
import { MainMenuComponent } from "../main/main-menu/main-menu.component";

@Injectable({ providedIn: 'root'})
export class CeAdminActionDefaultService extends FormActionDefault {
  
  menu() {
    return MainMenuComponent;
  }

}
