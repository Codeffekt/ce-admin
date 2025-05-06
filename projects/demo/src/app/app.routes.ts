import { Routes } from '@angular/router';
import { LogoutComponent } from '@codeffekt/ce-core';
import { AdminGuard } from '@codeffekt/ce-admin';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'home',
    canActivate: [AdminGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];
