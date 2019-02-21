import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of as ObservableOf} from 'rxjs';
import {JwtService} from './jwt.service';
import {AuthService} from './auth.service';
import {catchError, map} from 'rxjs/operators';
import {UserService} from './user.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private jwtService: JwtService,
              private router: Router,
              private authService: AuthService,
              private userService: UserService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let token = this.jwtService.getToken();
    if (token) {
      return this.authService.isAuthenticated(token).pipe(
        map(resopnse => {
          if (resopnse.message === 'Authenticated') {
            return true;
          }
          this.router.navigate(['/login']);
          return false;
        }),
        catchError((err: any) => {
          this.router.navigate(['/login']);
          return ObservableOf(false);
        })
      );
    } else {
      token = route.queryParamMap.get('token');
      return this.authService.isAuthenticated(token).pipe(
        map(resopnse => {
          if (resopnse.message === 'Authenticated') {
            this.jwtService.setToken(token);
            this.userService.setUser(resopnse.data);
            this.router.navigate(['/test']);
            return true;
          }
          this.router.navigate(['/login']);
          return false;
        }),
        catchError((err: any) => {
          this.router.navigate(['/login']);
          return ObservableOf(false);
        })
      );
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.canActivate(route, state);
  }

}
