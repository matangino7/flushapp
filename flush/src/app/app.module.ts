import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from  './material.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'register', component: RegisterFormComponent },
  ];


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LoginFormComponent,
    RegisterFormComponent,
    NavbarComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
