import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthFormValue } from '../models/auth-forms.interface';
import { environment } from '../../../../environments/environment';
import { AuthTokens } from '../../../models/auth-tokens.interface';

@Injectable()
export class AuthService {
  constructor(private readonly http: HttpClient) { }

  public register(registerRequest: AuthFormValue): Observable<AuthTokens> {
    return this.http.post<AuthTokens>(`${environment.apiUrl}/auth/sign-up`, registerRequest);
  }
}
