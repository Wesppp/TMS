import { FormControl } from '@angular/forms';

export interface RegisterForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  repeatPassword: FormControl<string | null>;
}

export interface LoginForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

export interface AuthFormValue {
  email: string;
  password: string;
}
