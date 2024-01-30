import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { Store } from "@ngrx/store";

import { logoutAction } from "@store/auth/actions/logout.action";
import { registerAction, registerFailureAction, registerSuccessAction } from "@store/auth/actions/register.action";
import { addLoadingAction, removeLoadingAction } from "@store/app-loading/actions/loading-crud.action";
import { AppLoadings } from "@enums/app-loading.enum";
import { loginFailureAction, loginSuccessAction } from "@store/auth/actions/login.action";

@Injectable()
export class AuthLoadingsEffect {

  constructor(private readonly actions$: Actions,
              private readonly store: Store) {}

  addAuthLoading$ = createEffect(
    () => this.actions$.pipe(
      ofType(logoutAction, registerAction),
      tap(() => {
        this.store.dispatch(addLoadingAction( { loadingName: AppLoadings.AUTH_LOADING } ));
      })
    ),
    {dispatch: false}
  );

  removeAuthLoading$ = createEffect(
    () => this.actions$.pipe(
      ofType(registerSuccessAction, registerFailureAction, loginSuccessAction, loginFailureAction),
      tap(() => {
        this.store.dispatch(removeLoadingAction( { loadingName: AppLoadings.AUTH_LOADING } ));
      })
    ),
    {dispatch: false}
  );
}
