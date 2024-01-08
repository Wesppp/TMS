import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { AuthService } from '../../../app/modules/auth/services/auth.service';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action';
import { AuthTokens } from '../../../app/models/auth-tokens.interface';
import { PersistenceService } from '../../../app/services/persistence.service';
import { AuthTokensEnum } from '../../../app/enums/auth-tokens.enum';

@Injectable()
export class RegisterEffect {
  constructor(private readonly actions$: Actions,
              private readonly authService: AuthService,
              private readonly router: Router,
              private readonly persistence: PersistenceService) {
  }

  public register$ = createEffect(() => this.actions$.pipe(
    ofType(registerAction),
    switchMap(({ registerRequest }) => this.authService.register(registerRequest)),
    map((authTokens: AuthTokens) => {
      this.persistence.setToken(AuthTokensEnum.ACCESS_TOKEN, authTokens.accessToken);

      return registerSuccessAction({ authTokens });
    }),
    catchError(() => {
      return of(registerFailureAction());
    })
  ));

  public redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
    ofType(registerSuccessAction),
    tap(() => {
      this.router.navigateByUrl('/home');
    })
  ), { dispatch: false });
}
