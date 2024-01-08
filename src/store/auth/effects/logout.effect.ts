import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { PersistenceService } from '../../../app/services/persistence.service';
import { logoutAction } from '../actions/logout.action';
import { AuthTokensEnum } from '../../../app/enums/auth-tokens.enum';

@Injectable()
export class LogoutEffect {

  constructor(private readonly actions$: Actions,
              private readonly router: Router,
              private readonly persistence: PersistenceService) {}

  logout$ = createEffect(
    () => this.actions$.pipe(
      ofType(logoutAction),
      tap(() => {
        this.persistence.removeToken(AuthTokensEnum.ACCESS_TOKEN);

        this.router.navigateByUrl('/auth/register')
      })
    ),
    {dispatch: false}
  )
}
