import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, tap } from 'rxjs';

import { PersistenceService } from './persistence.service';
import { AuthTokensEnum } from '../enums/auth-tokens.enum';
import { logoutAction } from '../../store/auth/actions/logout.action';
import { AuthState } from '../../store/auth/auth.state';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor {
  constructor(private readonly persistence: PersistenceService,
              private readonly store: Store<AuthState>,
              private readonly jwtHelperService: JwtHelperService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.persistence.getToken(AuthTokensEnum.ACCESS_TOKEN);

    if (token && this.jwtHelperService.isTokenExpired(token)) {
      this.store.dispatch(logoutAction())

      return next.handle(request)
    }

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(request).pipe(
      tap(
        () => {},
        error => {
          if (error.status === 401) {
            this.store.dispatch(logoutAction())
          }
        }
      )
    );
  }
}
