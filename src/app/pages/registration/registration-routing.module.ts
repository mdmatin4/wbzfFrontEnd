import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import { RegistrationModule } from './registration.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: RegistrationComponent }
])],
exports: [RouterModule]
})
export class RegistrationRoutingModule { }
