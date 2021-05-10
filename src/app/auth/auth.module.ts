import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';
import { AuthComponent } from 'src/app/auth/auth.component';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { reducers } from 'src/app/auth/store/reducers';
import { AuthService } from 'src/app/auth/services/auth.service';

@NgModule({
  declarations: [AuthComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
  ],
  providers: [AuthService],
})
export class AuthModule {}
