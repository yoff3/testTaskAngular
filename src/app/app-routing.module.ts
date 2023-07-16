import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "authorization",
    component: AuthFormComponent
  },
  {
    path: "registration",
    component: RegistrationFormComponent
  },
  {
    path: "users",
    loadChildren: () => import('./users/users.module').then(x =>x.UsersModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
