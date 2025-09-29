import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.scss'
})
export class Auth {
  @ViewChild('passwordInput') passwordInput!: ElementRef<HTMLInputElement>;
  
  credentials = {
    email: '',
    password: ''
  };
  
  isPasswordVisible = false;
  isLoading = false;

  togglePassword(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
    const input = this.passwordInput.nativeElement;
    input.type = this.isPasswordVisible ? 'text' : 'password';
  }

  onSubmit(): void {
    if (this.isLoading) return;
    
    this.isLoading = true;
    console.log('Form submitted with:', this.credentials);
    
    // Simulate API call
    setTimeout(() => {
      // TODO: Replace with actual authentication logic
      console.log('Authentication successful');
      this.isLoading = false;
    }, 1500);
  }
}
