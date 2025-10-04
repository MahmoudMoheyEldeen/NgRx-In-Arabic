import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../auth.actions';
import { AuthService, IsignInResponse } from '../../../services/auth.service';
import { authReducer } from '../../auth.reducer';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // شلنا FormsModule
  templateUrl: './auth.html',
  styleUrls: ['./auth.scss'], // صح
})
export class Auth implements OnInit {
  @ViewChild('passwordInput') passwordInput!: ElementRef<HTMLInputElement>;
  private store = inject(Store);
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  loginForm!: FormGroup;

  isPasswordVisible = false;
  isLoading = false;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]], // زودنا email validator
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    // دي للمراجعة الحية: المفروض كل كتابة تظهر هنا
    // this.loginForm.valueChanges.subscribe((v) => console.log('valueChanges', v));
  }

  getControl(name: string) {
    return this.loginForm.get(name);
  }

  setValue(name: string, value: unknown) {
    this.getControl(name)?.setValue(value);
    this.getControl(name)?.markAsDirty();
  }

  togglePassword(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
    const input = this.passwordInput?.nativeElement;
    if (input) input.type = this.isPasswordVisible ? 'text' : 'password';
  }

  signIn(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    const { email, password } = this.loginForm.value;

    // Dispatch the login action with just email and password
    this.store.dispatch(AuthActions.login({ email, password }));

    // The actual sign-in logic is now handled by the effect
    this.isLoading = false;
  }
}
