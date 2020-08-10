import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
