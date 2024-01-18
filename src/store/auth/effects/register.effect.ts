import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { AuthService } from '@services/auth.service';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action';
import { AuthTokens } from '@models/auth-tokens.interface';
import { PersistenceService } from '@services/persistence.service';
import { AuthTokensEnum } from '@enums/auth-tokens.enum';

@Injectable()
export class RegisterEffect {
  constructor(private readonly actions$: Actions,
              private readonly authService: AuthService,
              private readonly router: Router,
              private readonly persistence: PersistenceService) {
  }

  public register$ = createEffect(() => this.actions$.pipe(
    ofType(registerAction),
    switchMap(({ registerRequest }) => this.authService.register(registerRequest).pipe(
      map((authTokens: AuthTokens) => {
        this.persistence.setToken(AuthTokensEnum.ACCESS_TOKEN, authTokens.accessToken);
        this.persistence.setToken(AuthTokensEnum.REFRESH_TOKEN, authTokens.refreshToken);

        return registerSuccessAction({ authTokens });
      }),
      catchError(() => {
        return of(registerFailureAction());
      })
    )),
  ));

  public redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
    ofType(registerSuccessAction),
    tap(() => {
      this.router.navigateByUrl('/store/home');
    })
  ), { dispatch: false });
}
