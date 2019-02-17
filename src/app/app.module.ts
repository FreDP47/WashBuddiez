import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { PricingComponent } from './pricing/pricing.component';
import { PricingHomeComponent } from './pricing-home/pricing-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import {MatButtonModule } from '@angular/material';
import {SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
} from "angular-6-social-login";
import { LoginComponent } from './login/login.component';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([
    {
      id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("not required")
    },

    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider("not required")
  }]);
  
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent, 
  ],
  imports: [
    BrowserModule,
    JwBootstrapSwitchNg2Module,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    MaterialModule,
    MatButtonModule,
    BrowserAnimationsModule,
    SocialLoginModule,
  ],
  providers: [
    {
    provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
