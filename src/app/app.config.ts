import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { AuthInterceptor } from './services/auth-interceptor.service';
import { RegisterEffect } from '../store/auth/effects/register.effect';
import { LogoutEffect } from '../store/auth/effects/logout.effect';
import { LoginEffect } from '../store/auth/effects/login.effect';
import { reducers } from '../store/app.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    BrowserAnimationsModule,
    provideAnimations(),
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideStore(reducers),
    provideEffects([
      RegisterEffect,
      LogoutEffect,
      LoginEffect
    ]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
