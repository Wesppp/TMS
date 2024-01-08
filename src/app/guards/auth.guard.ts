import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';

import { Store } from '@ngrx/store';

import { isLoggedInSelector } from '../../store/auth/auth.selectors';

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);

  const isLoggedIn = store.select(isLoggedInSelector);

  return !!isLoggedIn;
};
