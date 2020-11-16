import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { BlogsComponent } from './blogs/blogs.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceOfferedComponent } from './service-offered/service-offered.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  // {path: 'bllogs', component: BlogsComponent},
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'services', component: ServiceOfferedComponent},
  {path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
