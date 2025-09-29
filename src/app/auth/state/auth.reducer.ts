import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';

export const authFeatureKey = 'auth';

export interface State {}

export const initialState: State = {};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginAuths, (state) => state),
  on(AuthActions.loginAuthsSuccess, (state, action) => state),
  on(AuthActions.loginAuthsFailure, (state, action) => state)
);

export const authFeature = createFeature({
  name: authFeatureKey,
  reducer: authReducer,
});
