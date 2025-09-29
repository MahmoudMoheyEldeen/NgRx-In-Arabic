import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Login Auths': emptyProps(),
    'Login Auths Success': props<{ data: unknown }>(),
    'Login Auths Failure': props<{ error: unknown }>(),
  }
});
