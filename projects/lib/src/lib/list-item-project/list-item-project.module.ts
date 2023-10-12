import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemProjectComponent } from './list-item-project/list-item-project.component';
import { CeListModule, CePipesModule } from '@codeffekt/ce-core';

@NgModule({
  declarations: [
    ListItemProjectComponent
  ],
  imports: [
    CommonModule,
    CeListModule,
    CePipesModule,
  ],
  exports: [
    ListItemProjectComponent
  ]
})
export class ListItemProjectModule { }
