import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleExampleComponent } from './module-example.component';
import { ModuleExampleRoutingModule } from './module-example.routing';

@NgModule({
  declarations: [
    ModuleExampleComponent
  ],
  imports: [
    CommonModule,
    ModuleExampleRoutingModule
  ]
})
export class ModuleExampleModule { }
