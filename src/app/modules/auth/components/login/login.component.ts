import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';

import { AuthFormValue, LoginForm } from '../../models/auth-forms.interface';
import {
  EmailControlComponent
} from '@components/controls/email-control/email-control.component';
import {
  PasswordControlComponent
} from '@components/controls/password-control/password-control.component';
import { loginAction } from '@store/auth/actions/login.action';
import { EMAIL_PATTERN } from '@constants/patterns';
import { isAuthLoadingSelector } from '@store/app-loading/app-loading.selectors';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AsyncPipe,
    ButtonModule,
    EmailControlComponent,
    PaginatorModule,
    PasswordControlComponent,
    ReactiveFormsModule,
    RouterLink,
    JsonPipe,
  ],
  templateUrl: './login.component.html',
  styleUrl: '../auth-forms.scss'
})
export class LoginComponent implements OnInit {
  public isFormSubmitting: Observable<boolean> = of(false);

  public loginForm!: FormGroup<LoginForm>;

  constructor(private readonly store: Store) {
  }

  public ngOnInit(): void {
    this.createForm();
    this.initializeValues();
  }

  private createForm(): void {
    this.loginForm = new FormGroup<LoginForm>({
      email: new FormControl<string>('', [
        Validators.required,
        Validators.pattern(EMAIL_PATTERN)
      ]),
      password: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  public initializeValues(): void {
    this.isFormSubmitting = this.store.select(isAuthLoadingSelector);
  }

  public onFormSubmit(): void {
    const loginRequest: AuthFormValue = {
      ...this.loginForm.value as AuthFormValue
    };

    this.store.dispatch(loginAction({ loginRequest }));
  }
}
