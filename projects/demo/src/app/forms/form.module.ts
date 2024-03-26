import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeAdminFormsModule, FormTopbarComponent } from '@codeffekt/ce-admin';

import { Injectable, Type } from "@angular/core";
import { FormActionDefault, FormActionService } from "@codeffekt/ce-core";
import { MainMenuComponent } from "../main-menu/main-menu.component";
import { FormToolbarComponent } from "@codeffekt/ce-admin";

@Injectable()
export class FormsActionDefaultService extends FormActionDefault {
  
  menu() {
    return MainMenuComponent;
  }  

  toolbar(): Type<any> {
      return FormToolbarComponent;
  }

  topbar(): Type<any> {
      return FormTopbarComponent;
  }
}


@NgModule({
  imports: [
    CommonModule,  
    CeAdminFormsModule,  
  ],
  providers: [  
    {
      provide: FormActionDefault,
      useClass: FormsActionDefaultService,
    },  
  ],
})
export class FormsModule { 

  constructor(
    formActionService: FormActionService,
    formActionDefault: FormActionDefault,
    ) {
    formActionService.setDefaultAction(formActionDefault);
  }

}
 