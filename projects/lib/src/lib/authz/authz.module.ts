import { NgModule } from "@angular/core";
import { IsSuperAdminDirective } from './is-super-admin.directive';
import { IsNotSuperAdminDirective } from './is-not-super-admin.directive';
import { HasAllResourceDirective } from './has-all-resource.directive';
import { IsAdminDirective } from "./is-admin.directive";

@NgModule({

  declarations: [
    IsSuperAdminDirective,
    IsNotSuperAdminDirective,
    HasAllResourceDirective,
    IsAdminDirective
  ],
  exports: [
    IsSuperAdminDirective,
    IsNotSuperAdminDirective,
    HasAllResourceDirective,
    IsAdminDirective
  ]
})
export class CeAdminAuthZModule {

}