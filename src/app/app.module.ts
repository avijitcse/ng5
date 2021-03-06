import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActivityComponent } from './activity/activity.component';
import { CustomerComponent } from './customer/customer.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  RECAPTCHA_SETTINGS,
  RecaptchaSettings,
  RecaptchaLoaderService,
  RecaptchaModule,
} from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './customer/customer.service';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    ActivityComponent,
    CustomerComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot(), // Keep in mind the "forRoot"-magic nuances!,
    HttpClientModule,
    RecaptchaFormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
