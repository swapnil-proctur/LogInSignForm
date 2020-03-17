import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthPageRoutingModule } from './auth-page-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginPageComponent } from './login-page/login-page.component';
import { AuthPageComponent } from './auth-page.component';
import { LoaderComponent } from '../loader/loader.component';


@NgModule({

  imports: [
    AuthPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,

  ],
  declarations: [
    AuthPageComponent,
    LoginPageComponent,
    LoaderComponent
  ],
  entryComponents: [],
  providers: []
})
export class AuthPageModule { }
