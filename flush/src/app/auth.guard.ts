import { CanActivateFn, Router } from '@angular/router';
import { AuthenticateService } from './authenticate.service'; 
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {
    const authenticationService = new AuthenticateService();
    const router = inject(Router);
     
    if(authenticationService.isAuthenticated()){
        return true;
    } else {
        router.navigate(['login']);
        return false;
    }
};
