import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';

export const authFeatureKey = 'auth';

export interface IAuthState {
  email: string;
  localId: string;
}

export const initialState: IAuthState = {
  email: '',
  localId: '',
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => state),
  on(AuthActions.loginSuccess, (state, action) => state),
  on(AuthActions.loginFailure, (state, action) => state)
);

export const authFeature = createFeature({
  name: authFeatureKey,
  reducer: authReducer,
});
