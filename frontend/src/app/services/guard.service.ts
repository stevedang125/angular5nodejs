import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public authService: AuthService, public router: Router) {}

  canActivate(): boolean {
    //console.log('Guard called !');

    if(this.authService.signedIn()){
      return true;
    }else{
      //console.log('not allows, navigating to home page /');
      this.router.navigate(['/']);
      return false;
    }

  }

}