import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';

export const authFeatureKey = 'auth';

export interface IAuthState {
  email: string;
  localId: string;
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  loading: boolean;
  error: string | null;
}

export const initialState: IAuthState = {
  email: '',
  localId: '',
  idToken: '',
  refreshToken: '',
  expiresIn: '',
  loading: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, action) => ({
    ...state,
    email: action.email,
    loading: true,
    error: null,
  })),
  on(AuthActions.loginSuccess, (state, action) => ({
    ...state,
    email: action.email,
    localId: action.localId,
    idToken: action.idToken,
    refreshToken: action.refreshToken,
    expiresIn: action.expiresIn,
    loading: false,
    error: null,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export const authFeature = createFeature({
  name: authFeatureKey,
  reducer: authReducer,
});
