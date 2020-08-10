import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layouts/containers/header/header.component';
import { MenuWrapperComponent } from './layouts/containers/menu-wrapper/menu-wrapper.component';
import { MenuListComponent } from './layouts/containers/menu-wrapper/menu-list/menu-list.component';
import { MenuBarComponent } from './layouts/containers/menu-bar/menu-bar.component';
import { NotFoundComponent } from './layouts/containers/not-found/not-found.component';
import { MenuButtonComponent } from './layouts/containers/menu-wrapper/menu-button/menu-button.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuWrapperComponent,
    MenuListComponent,
    MenuBarComponent,
    NotFoundComponent,
    MenuButtonComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
