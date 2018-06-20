import { NgModule } from '@angular/core';
import { LandingRouter } from './landing.router';
import { LandingComponent } from 'app/modules/landing/components/landing/landing.component';
import { SharedModule } from 'app/shared/shared.module';
import { LoginComponent } from 'app/modules/landing/components/login/login.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  exports: [

    MatInputModule,
    MatFormFieldModule
  ]
})
export class DemoMaterialModule {}


@NgModule({
  imports: [
    LandingRouter,
    SharedModule,
    DemoMaterialModule
  ],
  declarations: [
    LandingComponent,
    LoginComponent
  ],
  entryComponents: [ LoginComponent ],
})
export class LandingModule { }
