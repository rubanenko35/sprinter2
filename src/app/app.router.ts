import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPreloadingStrategy } from './utils/app.preloading-strategi';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/modules/landing/landing.module#LandingModule',
  },
  // {
  //   path: 'login',
  //   loadChildren: 'app/modules/login/login.module#LoginModule',
  // },
  {
    path: '**',
    redirectTo: ''
  }
];

export const AppRouter: ModuleWithProviders = RouterModule.forRoot(routes, { preloadingStrategy: AppPreloadingStrategy });
