import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import {
  EmailControlComponent
} from '@components/controls/email-control/email-control.component';
import {
  PasswordControlComponent
} from '@components/controls/password-control/password-control.component';
import { AuthFormValue, RegisterForm } from '../../models/auth-forms.interface';
import {
  compareValidator
} from '@utils/forms/compare-fields.validator';
import { registerAction } from '@store/auth/actions/register.action';
import { AuthState } from '@store/auth/auth.state';
import { EMAIL_PATTERN } from '@constants/patterns';
import { isAuthLoadingSelector } from '@store/app-loading/app-loading.selectors';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    EmailControlComponent,
    PasswordControlComponent,
    ButtonModule,
    ReactiveFormsModule,
    AsyncPipe,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: '../auth-forms.scss'
})
export class RegisterComponent implements OnInit {
  public isFormSubmitting: Observable<boolean> = of(false);

  public registerForm!: FormGroup<RegisterForm>;

  constructor(private readonly store: Store<AuthState>) {
  }

  public ngOnInit(): void {
    this.createForm();
    this.initializeValues();
  }

  private createForm(): void {
    this.registerForm = new FormGroup<RegisterForm>({
      email: new FormControl<string>('', [
        Validators.required,
        Validators.pattern(EMAIL_PATTERN)
      ]),
      password: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      repeatPassword: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(4)
      ])
    }, {
      validators: compareValidator<RegisterForm>('password', 'repeatPassword')
    });
  }

  public initializeValues(): void {
    this.isFormSubmitting = this.store.select(isAuthLoadingSelector);
  }

  public onFormSubmit(): void {
    const registerRequest: AuthFormValue = {
      password: this.registerForm.value.password as string,
      email: this.registerForm.value.email as string
    };

    this.store.dispatch(registerAction({ registerRequest }));
  }
}
