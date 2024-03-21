import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MainMenuModule } from '../main-menu/main-menu.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MainMenuModule,        
  ],
  providers: [       
  ],
})
export class HomeModule { }
 