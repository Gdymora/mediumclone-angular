import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';
import { AuthComponent } from 'src/app/auth/auth.component';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';

@NgModule({
  declarations: [AuthComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
