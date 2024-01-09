import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { map, Observable, take } from 'rxjs';
import { Store } from '@ngrx/store';

import { AuthState } from '../../store/auth/auth.state';
import { isLoggedInSelector } from '../../store/auth/auth.selectors';

export const authGuard: CanMatchFn = (route, segments) => {
  const isLoggedIn$: Observable<boolean> = inject(Store<AuthState>).select(isLoggedInSelector);

  return isLoggedIn$.pipe(
    take(1),
    map(isLoggedIn => {
      if (isLoggedIn) {
        return true;
      } else {
        inject(Router).navigate(['/auth/login']);

        return true;
      }
    })
  );
};
