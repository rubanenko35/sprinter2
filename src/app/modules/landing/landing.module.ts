import { NgModule } from '@angular/core';
import { LandingRouter } from './landing.router';
import { LandingComponent } from 'app/modules/landing/landing.component';

@NgModule({
  imports: [
    LandingRouter,
  ],
  declarations: [
    LandingComponent
  ]
})
export class LandingModule { }
