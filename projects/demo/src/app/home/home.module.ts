import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { CeCodeEditorModule } from '@codeffekt/ce-code-editor';
@NgModule({
  imports: [
    CommonModule,
    CeCodeEditorModule,
    HomeRoutingModule,    
  ],
  providers: [       
  ],
})
export class HomeModule { }
 