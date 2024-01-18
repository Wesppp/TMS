import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule } from "@angular/forms";

import { RadioButtonClickEvent, RadioButtonModule } from "primeng/radiobutton";

import { RadioButtonsList } from "@models/radio-buttons-list.interface";

@Component({
  selector: 'app-radio-buttons-list',
  standalone: true,
  imports: [
    RadioButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './radio-buttons-list.component.html',
  styleUrl: './radio-buttons-list.component.scss'
})
export class RadioButtonsListComponent implements ControlValueAccessor {
  @Input({ required: true }) public variants!: RadioButtonsList[];
  @Input() public title!: string;

  public radioButtonControl: FormControl = new FormControl();

  private onTouched!: () => void;
  private onChange!: (_: string) => void;

  constructor(@Self() public readonly ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  public writeValue(value: string): void {}

  public registerOnChange(fn: (_: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public onRadioButtonSelect({ value } : RadioButtonClickEvent) {
    this.onChange(value.key);
  }
}
