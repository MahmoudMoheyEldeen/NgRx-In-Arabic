// auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';

export interface IsignInResponse {
  idToken: string;
  localId: string;
  refreshToken: string;
  expiresIn: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signIn(email: string, password: string): Observable<IsignInResponse> {
    console.log('Login attempt with:', { email, password });

    // For demo purposes, accept any credentials
    // In a real app, you would validate against your backend
    return of({
      // Simulate a successful response
      id: 123,
      email: email,
      username: email.split('@')[0],
      firstName: 'Demo',
      lastName: 'User',
      token: 'fake-jwt-token-' + Math.random().toString(36).substring(2, 15),
    }).pipe(
      // Add a small delay to simulate network request
      delay(800),

      // Map the fake response to match our expected format
      map((response) => ({
        idToken: response.token,
        localId: String(response.id),
        refreshToken: response.token,
        expiresIn: '3600',
      })),

      // Log the successful response
      map((response) => {
        console.log('Login successful:', response);
        return response;
      }),

      // Handle any errors
      catchError((error) => {
        console.error('Login error:', error);
        return throwError(() => new Error('Login failed. Please try again.'));
      })
    );
  }
}
