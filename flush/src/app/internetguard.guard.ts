import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { InternetService } from './internet.service';

@Injectable({
  providedIn: 'root',
})
export class InternetGuardGuard implements CanActivate {
  constructor(
    private router: Router,
    private internetService: InternetService
  ) {}

  async canActivate(route: any, state: any) {
    try {
      const isInternet = await this.internetService.isInternet().toPromise();

      if (isInternet) {
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }
    } catch (error) {
      console.error('Error checking internet connection:', error);
      return false;
    }
  }
}