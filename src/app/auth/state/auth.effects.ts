import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthActions } from './auth.actions';
import { AuthService } from '../services/auth.service';

interface AuthResponse {
  localId: string;
  idToken: string;
  refreshToken: string;
  expiresIn: string;
}

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      concatMap(({ email, password }) =>
        this.authService.signIn(email, password).pipe(
          map((response: AuthResponse) => 
            AuthActions.loginSuccess({
              email,
              localId: response.localId,
              idToken: response.idToken,
              refreshToken: response.refreshToken,
              expiresIn: response.expiresIn,
              loading: false,
              error: null
            })
          ),
          catchError((error) => 
            of(AuthActions.loginFailure({ 
              error: error.message || 'Login failed' 
            }))
          )
        )
      )
    );
  });
}
