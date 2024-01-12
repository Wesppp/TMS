import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';

import { AuthState } from '@store/auth/auth.state';
import { PersistenceService } from '@services/persistence.service';
import { AuthTokensEnum } from '@enums/auth-tokens.enum';
import { logoutAction } from '@store/auth/actions/logout.action';
import { refreshTokensAction } from '@store/auth/actions/refresh-tokens.action';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor {
  constructor(private readonly persistence: PersistenceService,
              private readonly store: Store) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.persistence.getToken(AuthTokensEnum.ACCESS_TOKEN);
    const refreshToken = this.persistence.getToken(AuthTokensEnum.REFRESH_TOKEN);

    // if(accessToken && refreshToken) {
    //   if (this.jwtHelperService.isTokenExpired(refreshToken)) {
    //     this.store.dispatch(logoutAction());
    //
    //     return next.handle(request);
    //   } else {
    //     this.store.dispatch(refreshTokensAction({ refreshToken }));
    //
    //     return next.handle(request);
    //   }
    // }
    //
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
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
