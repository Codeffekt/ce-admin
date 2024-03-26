import { Injectable } from "@angular/core";
import { FormActionDefault } from "@codeffekt/ce-core";
import { MainMenuComponent } from "../main-menu/main-menu.component";

@Injectable()
export class HomeActionDefaultService extends FormActionDefault {
  
  menu() {
    return MainMenuComponent;
  }   
}
