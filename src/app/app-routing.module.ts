import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceOfferedComponent  } from './service-offered/service-offered.component';

import { Observable } from 'rxjs';
const routes: Routes = [
  {path: 'Signup', component: SignupComponent },
  {path: 'Login', component: LoginComponent },
  {path: 'Profile', component: ProfileComponent },
  {path: 'Blog', component: BlogsComponent },
  {path: 'Service', component: ServiceOfferedComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
