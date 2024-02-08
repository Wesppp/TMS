export interface AuthForm {
  email: string | null;
  password: string | null;
}

export interface RegisterForm extends AuthForm {
  repeatPassword: string | null;
}
