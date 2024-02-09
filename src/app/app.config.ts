import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { MessageService } from "primeng/api";

import { routes } from './app.routes';
import { reducers } from '@store/app.state';
import { AuthInterceptor } from '@services/auth.interceptor';
import AllFavoriteEffects from "@store/favorite-list/effects";
import AllAuthEffects from "@store/auth/effects";
import AllCartEffects from "@store/cart/effects";
import AllProductsEffects from "@store/products/effects/inedex";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    BrowserAnimationsModule,
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideStore(reducers),
    provideEffects([
      ...AllProductsEffects,
      ...AllFavoriteEffects,
      ...AllAuthEffects,
      ...AllCartEffects,
    ]),
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()}),
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    provideRouterStore(),
    MessageService,
  ]
};
