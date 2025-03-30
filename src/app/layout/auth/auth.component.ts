import { Component } from '@angular/core';
import { RegisterComponent } from '../../shared/components/clients/register/register.component';
import { LoginComponent } from '../../shared/components/clients/login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [RegisterComponent, LoginComponent, CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  isLogin = false;

  signIn(message: string) {
    this.isLogin = false;
  }

  signUp(message: string) {
    this.isLogin = true;
  }

  public UIResource = {
    bookBanner: 'Booking Web',
    managementSystem: 'Management System',
  };
}
