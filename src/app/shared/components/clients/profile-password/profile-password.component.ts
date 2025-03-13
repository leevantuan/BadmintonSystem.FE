import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile-password',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './profile-password.component.html',
  styleUrl: './profile-password.component.css',
})
export class ProfilePasswordComponent {
  passwordForm: FormGroup;
  showPassword = { current: false, new: false, confirm: false };

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      currentPassword: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
          ),
        ],
      ],
      newPassword: [
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

  togglePassword(field: 'current' | 'new' | 'confirm') {
    this.showPassword[field] = !this.showPassword[field];
  }

  updatePassword() {
    if (this.passwordForm.valid) {
      console.log(this.passwordForm.value);
    }
  }

  get currentPasswordError(): string | null {
    const control = this.passwordForm.controls['currentPassword'];
    if (control.touched) {
      if (control.errors?.['required']) return 'This is required';
      if (control.errors?.['pattern']) return '8+ chars, A-Z, a-z, 0-9, #$!..';
    }
    return null;
  }

  get newPasswordError(): string | null {
    const control = this.passwordForm.controls['newPassword'];
    if (control.touched) {
      if (control.errors?.['required']) return 'This is required';
      if (control.errors?.['pattern']) return '8+ chars, A-Z, a-z, 0-9, #$!..';
    }
    return null;
  }

  get confirmPasswordError(): string | null {
    const control = this.passwordForm.controls['confirmPassword'];
    if (control.touched) {
      if (control.errors?.['required']) return 'This is required';
      if (control.errors?.['pattern']) return '8+ chars, A-Z, a-z, 0-9, #$!..';
      if (this.passwordMatchValidator(this.passwordForm))
        return 'Passwords do not match';
    }
    return null;
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('newPassword')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }

    return null;
  }
}
