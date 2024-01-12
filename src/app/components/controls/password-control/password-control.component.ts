import { Attribute, Component, DestroyRef, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe, KeyValuePipe } from '@angular/common';

import { PasswordModule } from 'primeng/password';

import { FormControlErrors } from '@enums/form-control-errors.enum';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-password-control',
  standalone: true,
  imports: [
    PasswordModule,
    ReactiveFormsModule,
    KeyValuePipe,
    JsonPipe,
  ],
  templateUrl: './password-control.component.html',
  styleUrl: '../controls.scss'
})
export class PasswordControlComponent implements ControlValueAccessor, OnInit {
  public passwordControl: FormControl = new FormControl();

  private onTouched!: () => void;
  private onChange!: (_: string) => void;

  protected readonly formControlErrors: { [key: string]: string } = FormControlErrors;

  constructor(@Attribute('placeholder') readonly placeholder: string,
              @Self() public readonly ngControl: NgControl,
              private readonly destroyRef: DestroyRef) {
    this.ngControl.valueAccessor = this;
  }

  public ngOnInit(): void {
    if(this.ngControl.control) {
      this.passwordControl.setValidators(this.ngControl.control.validator);
    }


    this.passwordControl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value: string): void => {
        this.onChange(value);
      });
  }

  public writeValue(value: string): void {}

  public registerOnChange(fn: (_: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
