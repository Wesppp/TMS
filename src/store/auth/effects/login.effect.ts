import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { AuthService } from '../../../app/modules/auth/services/auth.service';
import { PersistenceService } from '../../../app/services/persistence.service';
import { AuthTokens } from '../../../app/models/auth-tokens.interface';
import { AuthTokensEnum } from '../../../app/enums/auth-tokens.enum';
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.action';

@Injectable()
export class LoginEffect {
  constructor(private readonly actions$: Actions,
              private readonly authService: AuthService,
              private readonly router: Router,
              private readonly persistence: PersistenceService) {
  }

  public login$ = createEffect(() => this.actions$.pipe(
    ofType(loginAction),
    switchMap(({ loginRequest }) => this.authService.login(loginRequest)),
    map((authTokens: AuthTokens) => {
      this.persistence.setToken(AuthTokensEnum.ACCESS_TOKEN, authTokens.accessToken);

      return loginSuccessAction({ authTokens });
    }),
    catchError(() => {
      return of(loginFailureAction());
    })
  ));

  public redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
    ofType(loginSuccessAction),
    tap(() => {
      this.router.navigateByUrl('/home');
    })
  ), { dispatch: false });
}
