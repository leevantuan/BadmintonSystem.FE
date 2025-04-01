import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SessionStorageService } from '../session-storage/session-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  baseUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
    private sessionStorageService: SessionStorageService
  ) {}

  public get header() {
    // let token = this.sessionStorageService.getItem('accessToken')?.toString();
    let code = this.sessionStorageService.getItem('tenantCode')?.toString();

    if (code) {
      return new HttpHeaders({
        accept: '*/*',
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
        tenant: code + '',
      });
    }
    return new HttpHeaders({
      accept: '*/*',
      'Content-Type': 'application/json',
    });
  }

  public get headerNoTenant() {
    // let token = localStorage.getItem('accessToken')?.toString();
    return new HttpHeaders({
      accept: '*/*',
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
    });
  }

  /**Get request */
  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(this.baseUrl + url, { headers: this.header });
  }

  /**Post request */
  post<T>(url: string, body: any): Observable<T> {
    return this.httpClient.post<T>(this.baseUrl + url, body, {
      headers: this.header,
    });
  }

  /**Put request */
  put<T>(url: string, body: any): Observable<T> {
    return this.httpClient.put<T>(this.baseUrl + url, body, {
      headers: this.header,
    });
  }

  /**Delete request */
  delete<T>(url: string, body: any): Observable<T> {
    return this.httpClient.delete<T>(this.baseUrl + url, {
      headers: this.header,
      body: body,
    });
  }

  /**Get request */
  getNoHeader<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(this.baseUrl + url, {
      headers: this.headerNoTenant,
    });
  }

  /**Post request */
  postNoHeader<T>(url: string, body: any): Observable<T> {
    return this.httpClient.post<T>(this.baseUrl + url, body, {
      headers: this.headerNoTenant,
    });
  }

  /**Put request */
  putNoHeader<T>(url: string, body: any): Observable<T> {
    return this.httpClient.put<T>(this.baseUrl + url, body, {
      headers: this.headerNoTenant,
    });
  }

  /**Delete request */
  deleteNoHeader<T>(url: string, body: any): Observable<T> {
    return this.httpClient.delete<T>(this.baseUrl + url, {
      headers: this.headerNoTenant,
      body: body,
    });
  }
}
