import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './material.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MapPageComponent } from './map-page/map-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkersService } from './markers.service';
import { RegisterService } from './register.service';
import { LoginService } from './login.service';
import { AuthenticateService } from './authenticate.service';
import { MapPageUserComponent } from './map-page-user/map-page-user.component';



const routes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'register', component: RegisterFormComponent },
    { path: 'map-page', component: MapPageComponent },
];


@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        LoginFormComponent,
        RegisterFormComponent,
        NavbarComponent,
        LoginPageComponent,
        MapPageComponent,
        MapPageUserComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MyMaterialModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
    ],
    exports: [RouterModule],
    providers: [MarkersService, RegisterService, LoginService, AuthenticateService],
    bootstrap: [AppComponent]
})
export class AppModule { }
