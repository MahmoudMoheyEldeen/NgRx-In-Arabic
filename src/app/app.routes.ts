import { Routes } from '@angular/router';
import { Auth } from './auth/state/pages/auth/auth';
import { provideState } from '@ngrx/store';
import { authFeatureKey, authReducer } from './auth/state/auth.reducer';
import { productsesFeatureKey, reducer as productsReducer } from './products/state/products.reducer';
import { AllProducts } from './products/pages/all-products/all-products';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    title: 'Login',
    path: 'auth',
    component: Auth,
    providers: [provideState({ name: authFeatureKey, reducer: authReducer })],
  },
  {
    title: 'All Products',
    path: 'products',
    component: AllProducts,
    providers: [provideState({ name: productsesFeatureKey, reducer: productsReducer })],
  },
];
