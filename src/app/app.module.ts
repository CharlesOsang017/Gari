import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ProfileComponent } from './profile/profile.component';
import { ServiceOfferedComponent} from './service-offered/service-offered.component';
import { SignupComponent } from './signup/signup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';

import { BackendApiService } from './services/backend-api.service';


@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    ServiceOfferedComponent,
    SignupComponent,
    LandingPageComponent,
    GalleryComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BackendApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
