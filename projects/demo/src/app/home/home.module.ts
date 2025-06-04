import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { CeCodeEditorModule } from '@codeffekt/ce-code-editor';
import { CeFormsModule } from '@codeffekt/ce-core';
@NgModule({
  imports: [
    CommonModule,
    CeCodeEditorModule,
    HomeRoutingModule,   
    CeFormsModule, 
  ],
  providers: [       
  ],
})
export class HomeModule { }
 