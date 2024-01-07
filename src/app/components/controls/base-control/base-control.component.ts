import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  standalone: true,
  templateUrl: './base-control.component.html',
})
export class BaseControlComponent {
  @Input({ required: true }) public control!: AbstractControl;

  public get formControl(): FormControl {
    return this.control as FormControl;
  }
}
