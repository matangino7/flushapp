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
import { authGuard } from './auth.guard';
import { ToiletListComponent } from './toilet-list/toilet-list.component';
import { ToiletformComponent } from './toiletform/toiletform.component';
import { ReviewformComponent } from './reviewform/reviewform.component';
import { ToiletRegisterService } from './toilet-register.service';
import { ReviewRegisterService } from './review-register.service';
import { DataServiceService } from './data-service.service';
import { LoadingscreenComponent } from './loadingscreen/loadingscreen.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AboutComponent } from './about/about.component';
import { InternetGuardGuard } from './internetguard.guard';
import { RedbuttonComponent } from './redbutton/redbutton.component';


const routes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'login', component: LoginFormComponent, canActivate: [InternetGuardGuard] },
    { path: 'register', component: RegisterFormComponent, canActivate: [InternetGuardGuard]},
    { path: 'map-page', component: MapPageComponent, canActivate: [InternetGuardGuard] },
    { path: 'about', component: AboutComponent , canActivate: [InternetGuardGuard]},
    { path: 'review', component: ReviewformComponent, canActivate: [authGuard, InternetGuardGuard] },
    { path: 'map-user-page', component: MapPageUserComponent, canActivate: [authGuard, InternetGuardGuard]},
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
        ToiletListComponent,
        ToiletformComponent,
        ReviewformComponent,
        LoadingscreenComponent,
        AboutComponent,
        RedbuttonComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MyMaterialModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        NgxSpinnerModule,
    ],
    exports: [RouterModule],
    providers: [MarkersService, RegisterService, LoginService, AuthenticateService, ToiletRegisterService, ReviewRegisterService, DataServiceService],
    bootstrap: [AppComponent]
})
export class AppModule { }
