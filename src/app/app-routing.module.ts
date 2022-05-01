import { NgModule } from '@angular/core';

import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule,Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component'
import { AddAdminComponent } from './components/add-admin/add-admin.component';
const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'Registration',
    component: RegistrationComponent,
  },
  {
    path: 'AddAdminComponent',
    component: AddAdminComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
