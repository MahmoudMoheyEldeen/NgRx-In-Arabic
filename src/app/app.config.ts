import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authFeature } from './auth/state/auth.reducer';
import { AuthEffects } from './auth/state/auth.effects';
import { provideEffects } from '@ngrx/effects';
import { productsesFeature } from './products/state/products.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideStore({
      [authFeature.name]: authFeature.reducer,
      [productsesFeature.name]: productsesFeature.reducer,
    }),
    

    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
