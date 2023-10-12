import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeListModule, CePipesModule } from '@codeffekt/ce-core';
import { ListItemAccountComponent } from './list-item-account/list-item-account.component';

@NgModule({
  declarations: [    
    ListItemAccountComponent
  ],
  imports: [
    CommonModule,
    CeListModule,
    CePipesModule,
  ],
  exports: [   
    ListItemAccountComponent 
  ]
})
export class ListItemAccountModule { }
