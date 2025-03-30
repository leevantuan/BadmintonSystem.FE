import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth/auth.service';
import LoginResponseModel from '../../../../core/models/login.response.model';
import { NotificationToastService } from '../../../services/notification-toast/notification-toast.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @Output() login = new EventEmitter<string>();

  loginForm: FormGroup;
  showPassword = false;
  showConfirmPassword = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastService: NotificationToastService
  ) {
    this.loginForm = this.fb.group({
      email: ['admin@gmail.com', [Validators.required, Validators.email]],
      password: ['123456@Aa', [Validators.required]],
    });
  }

  signUp() {
    this.login.emit('signUp');
  }

  onSubmit() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.login(email, password).subscribe(
      (res: LoginResponseModel) => {
        if (res.isSuccess) {
          localStorage.setItem('accessToken', res.value.accessToken);
          localStorage.setItem('isLogin', 'true');
          localStorage.setItem('userName', res.value.user.userName);
          localStorage.setItem('userAvatar', res.value.user.avatarUrl);
          localStorage.setItem('isAdmin', 'true');
          this.toastService.showSuccess('Đăng nhập thành công!');
          this.router.navigate(['/']);
          this.authService.loginStateChangeEmitter.emit(true);
        }
      },
      (error) => {
        this.toastService.showError(error);
      }
    );
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  get emailError(): string | null {
    const control = this.loginForm.controls['email'];
    if (control.touched) {
      if (control.errors?.['required']) return 'This is required';
      if (control.errors?.['email']) return 'Invalid email format';
    }
    return null;
  }

  get passwordError(): string | null {
    const control = this.loginForm.controls['password'];
    if (control.touched) {
      if (control.errors?.['required']) return 'This is required';
    }
    return null;
  }

  public UIResource = {
    emailAddress: 'Email Address',
    password: 'Password',
    login: 'Login',
    signUp: 'Sign Up',
  };
}
