import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { AuthTokens } from '@models/auth-tokens.interface';
import { AuthForm } from "@modules/auth/models/auth-forms.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly http: HttpClient,
              private readonly handler: HttpBackend) { }

  public register(registerRequest: AuthForm): Observable<AuthTokens> {
    return this.http.post<AuthTokens>(`${environment.apiUrl}/auth/sign-up`, registerRequest);
  }

  public login(loginRequest: AuthForm): Observable<AuthTokens> {
    return this.http.post<AuthTokens>(`${environment.apiUrl}/auth/sign-in`, loginRequest);
  }

  public refreshTokens(refreshToken: string): Observable<AuthTokens> {
    const http: HttpClient = new HttpClient(this.handler);

    return http.get<AuthTokens>(`${environment.apiUrl}/auth/refresh-tokens`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${refreshToken}`
      })
    });
  }
}
