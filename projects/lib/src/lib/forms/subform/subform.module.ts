import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubFormRoutingModule } from './subform-routing.module'
import { CeFormEditorModule } from '@codeffekt/ce-core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SubFormRoutingModule, 
    CeFormEditorModule,   
  ],
  providers: [    
  ]
})
export class SubFormModule { }
