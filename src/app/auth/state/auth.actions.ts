import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IAuthState } from './auth.reducer';

export interface LoginCredentials {
  email: string;
  password: string;
}

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    Login: props<LoginCredentials>(),
    'Login Success': props<IAuthState>(),
    'Login Failure': props<{ error: string }>(),
  },
});
