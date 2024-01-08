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

@Injectable()
export class RegisterEffect {
  constructor(private readonly actions$: Actions,
              private readonly authService: AuthService,
              private readonly router: Router) {
  }

  public register$ = createEffect(() => this.actions$.pipe(
    ofType(registerAction),
    switchMap(({ registerRequest }) => {
      return this.authService.register(registerRequest).pipe(
        map((authTokens: AuthTokens) => {
          console.log(authTokens);
          return registerSuccessAction({ authTokens });
        }),
        catchError(() => {
          return of(registerFailureAction());
        })
      )
    })
  ));

  public redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
    ofType(registerSuccessAction),
    tap(() => {
      this.router.navigateByUrl('/login');
    })
  ), { dispatch: false });
}
