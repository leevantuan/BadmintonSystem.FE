import { EventEmitter, Injectable } from '@angular/core';
import { ApiClientService } from '../api-client/api-client.service';
import LoginResponseModel from '../../models/login.response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public token: string = '';
  public isAuthenticated = false;
  public loginStateChangeEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor(private apiClient: ApiClientService) {}

  getIsAuthenticated(): boolean {
    let isAuthen = localStorage.getItem('isAuthenticated');
    return Boolean(isAuthen);
  }

  login(email: string, passWord: string) {
    return this.apiClient.post<LoginResponseModel>('users/login', {
      email: email,
      password: passWord,
    });
  }

  logout() {
    localStorage.setItem('accessToken', '');
    localStorage.setItem('isAuthenticated', 'false');
    this.loginStateChangeEmitter.emit(false);
  }
}
