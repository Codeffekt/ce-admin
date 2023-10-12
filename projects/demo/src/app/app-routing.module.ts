import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from '@codeffekt/ce-core';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes/* , { enableTracing: true } */)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
