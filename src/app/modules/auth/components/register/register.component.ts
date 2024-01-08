import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  EmailControlComponent
} from '../../../../components/controls/email-control/email-control.component';
import {
  PasswordControlComponent
} from '../../../../components/controls/password-control/password-control.component';
import { AuthFormValue, RegisterForm } from '../../models/auth-forms.interface';
import {
  passwordMatchValidator
} from '../../../../utils/custom-validators/compare-fields.validator';
import { isSubmittingSelector } from '../../../../../store/auth/auth.selectors';
import { AuthService } from '../../services/auth.service';
import { registerAction } from '../../../../../store/auth/actions/register.action';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    EmailControlComponent,
    PasswordControlComponent,
    ButtonModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  public isSubmitting$!: Observable<boolean>;

  public registerForm!: FormGroup<RegisterForm>;

  constructor(private readonly authService: AuthService,
              private readonly store: Store) {
  }

  public ngOnInit(): void {
    this.createForm();
    this.initializeValues();
  }

  private createForm(): void {
    this.registerForm = new FormGroup<RegisterForm>({
      email: new FormControl<string>('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
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
      validators: passwordMatchValidator
    });
  }

  public initializeValues(): void {
    this.isSubmitting$ = this.store.select(isSubmittingSelector);
  }

  public onFormSubmit(): void {
    const registerRequest: AuthFormValue = {
      password: this.registerForm.value.password as string,
      email: this.registerForm.value.email as string
    }

    this.store.dispatch(registerAction({ registerRequest }));
  }
}
