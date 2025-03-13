import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  @Output() register = new EventEmitter<string>();

  registerForm: FormGroup;
  showPassword = false;
  showConfirmPassword = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(11),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
          ),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
          ),
        ],
      ],
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }

    return null;
  }

  signIn() {
    this.register.emit('signIn');
  }

  onSubmit() {
    const firstName = this.registerForm.get('firstName')?.value;
    const lastName = this.registerForm.get('lastName')?.value;
    const email = this.registerForm.get('email')?.value;
    const phone = this.registerForm.get('phone')?.value;
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  // Validator Invalid Form
  get firstNameError(): string | null {
    const control = this.registerForm.controls['firstName'];
    if (control.touched && control.errors?.['required'])
      return 'This is required';
    return null;
  }

  get lastNameError(): string | null {
    const control = this.registerForm.controls['lastName'];
    if (control.touched && control.errors?.['required'])
      return 'This is required';
    return null;
  }

  get emailError(): string | null {
    const control = this.registerForm.controls['email'];
    if (control.touched) {
      if (control.errors?.['required']) return 'This is required';
      if (control.errors?.['email']) return 'Invalid email format';
    }
    return null;
  }

  get phoneError(): string | null {
    const control = this.registerForm.controls['phone'];
    if (control.touched) {
      if (control.errors?.['required']) return 'This is required';
      if (control.errors?.['minlength']) return 'Min char 9 required';
      if (control.errors?.['maxlength']) return 'Max char 11 required';
    }
    return null;
  }

  get passwordError(): string | null {
    const control = this.registerForm.controls['password'];
    if (control.touched) {
      if (control.errors?.['required']) return 'This is required';
      if (control.errors?.['pattern']) return '8+ chars, A-Z, a-z, 0-9, #$!..';
    }
    return null;
  }

  get confirmPasswordError(): string | null {
    const control = this.registerForm.controls['confirmPassword'];
    if (control.touched) {
      if (control.errors?.['required']) return 'This is required';
      if (control.errors?.['pattern']) return '8+ chars, A-Z, a-z, 0-9, #$!..';
      if (this.passwordMatchValidator(this.registerForm))
        return 'Passwords do not match';
    }
    return null;
  }
}
