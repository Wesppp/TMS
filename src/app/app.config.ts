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

import { routes } from './app.routes';
import { RegisterEffect } from '@store/auth/effects/register.effect';
import { LogoutEffect } from '@store/auth/effects/logout.effect';
import { LoginEffect } from '@store/auth/effects/login.effect';
import { reducers } from '@store/app.state';
import { GetLatestProductsEffect } from '@store/products/effects/get-latest-products.effect';
import { GetAllProductsEffect } from '@store/products/effects/get-all-products.effect';
import { AuthInterceptor } from '@services/auth.interceptor';
import { GetFeaturedProductsEffect } from '@store/products/effects/get-featured-products.effect';
import {
  GetNewArrivalsProductsEffect
} from '@store/products/effects/get-new-arrivals-products.effect';
import {
  GetBestSellersProductsEffect
} from '@store/products/effects/get-best-sellers-products.effect';
import { RefreshTokensEffect } from "@store/auth/effects/refresh-tokens.effect";
import { GetCategoriesEffect } from "@store/products/effects/get-categories.effect";
import { FilterProductsEffect } from "@store/products/effects/filter-products.effect";
import { GetProductEffect } from "@store/products/effects/get-product.effect";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    BrowserAnimationsModule,
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideStore(reducers),
    provideEffects([
      RegisterEffect,
      LogoutEffect,
      LoginEffect,
      GetLatestProductsEffect,
      GetAllProductsEffect,
      GetFeaturedProductsEffect,
      GetNewArrivalsProductsEffect,
      GetBestSellersProductsEffect,
      RefreshTokensEffect,
      GetCategoriesEffect,
      FilterProductsEffect,
      GetProductEffect,
    ]),
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()}),
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    provideRouterStore()
  ]
};
