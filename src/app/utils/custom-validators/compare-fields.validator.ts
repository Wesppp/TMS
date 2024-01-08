import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const repeatPassword = control.get('repeatPassword');

  if (password?.value !== repeatPassword?.value) {
    repeatPassword?.setErrors({ passwordMismatch: true });
  } else {
    repeatPassword?.setErrors(null);
  }

  return null;
}
