import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from 'app/modules/landing/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: ':type',
        component: LoginComponent
      }
    ]
  },

];

export const LandingRouter: ModuleWithProviders = RouterModule.forChild(routes);
