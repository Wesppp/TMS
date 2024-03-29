import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { AuthService } from '@services/auth.service';
import { PersistenceService } from '@services/persistence.service';
import { AuthTokens } from '@models/auth-tokens.interface';
import { AuthTokensEnum } from '@enums/auth-tokens.enum';
import {
  refreshTokensAction,
  refreshTokensFailureAction,
  refreshTokensSuccessAction,
} from '../actions/refresh-tokens.action';

@Injectable()
export class RefreshTokensEffect {
  constructor(private readonly actions$: Actions,
              private readonly authService: AuthService,
              private readonly persistence: PersistenceService) {
  }

  public refreshTokens$ = createEffect(() => this.actions$.pipe(
    ofType(refreshTokensAction),
    switchMap(({ refreshToken }) => this.authService.refreshTokens(refreshToken).pipe(
      map((authTokens: AuthTokens) => {
        this.persistence.setToken(AuthTokensEnum.ACCESS_TOKEN, authTokens.accessToken);
        this.persistence.setToken(AuthTokensEnum.REFRESH_TOKEN, authTokens.refreshToken);

        return refreshTokensSuccessAction({ authTokens });
      }),
      catchError(() => {
        return of(refreshTokensFailureAction());
      })
    )),
  ));
}
