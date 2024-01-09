import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';

import { AuthFormValue, LoginForm } from '../../models/auth-forms.interface';
import { isSubmittingSelector } from '../../../../../store/auth/auth.selectors';
import { AuthState } from '../../../../../store/auth/auth.state';
import {
  EmailControlComponent
} from '../../../../components/controls/email-control/email-control.component';
import {
  PasswordControlComponent
} from '../../../../components/controls/password-control/password-control.component';
import { loginAction } from '../../../../../store/auth/actions/login.action';

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
  ],
  templateUrl: './login.component.html',
  styleUrl: '../auth-forms.scss'
})
export class LoginComponent implements OnInit {
  public isSubmitting$!: Observable<boolean>;

  public loginForm!: FormGroup<LoginForm>;

  constructor(private readonly store: Store<AuthState>) {
  }

  public ngOnInit(): void {
    this.createForm();
    this.initializeValues();
  }

  private createForm(): void {
    this.loginForm = new FormGroup<LoginForm>({
      email: new FormControl<string>('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]),
      password: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  public initializeValues(): void {
    this.isSubmitting$ = this.store.select(isSubmittingSelector);
  }

  public onFormSubmit(): void {
    const loginRequest: AuthFormValue = {
      ...this.loginForm.value as AuthFormValue
    };

    this.store.dispatch(loginAction({ loginRequest }));
  }
}
