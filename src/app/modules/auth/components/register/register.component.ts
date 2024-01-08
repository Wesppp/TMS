import { Component, OnInit } from '@angular/core';

import { ButtonModule } from 'primeng/button';

import {
  EmailControlComponent
} from '../../../../components/controls/email-control/email-control.component';
import {
  PasswordControlComponent
} from '../../../../components/controls/password-control/password-control.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterForm } from '../../models/auth-forms.interface';
import {
  passwordMatchValidator
} from '../../../../utils/custom-validators/compare-fields.validator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    EmailControlComponent,
    PasswordControlComponent,
    ButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup<RegisterForm>;

  public ngOnInit(): void {
    this.createForm();
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

  public onFormSubmit(): void {
    console.log(this.registerForm.value);
  }
}
