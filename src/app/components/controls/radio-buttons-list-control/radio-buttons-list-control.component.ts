import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule } from "@angular/forms";

import { RadioButtonClickEvent, RadioButtonModule } from "primeng/radiobutton";

import { FormChoiceGroup } from "@models/form-choice-group.interface";

@Component({
  selector: 'app-radio-buttons-list-control',
  standalone: true,
  imports: [
    RadioButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './radio-buttons-list-control.component.html',
  styleUrls: [
    './radio-buttons-list-control.component.scss',
    '../controls.scss'
  ]
})
export class RadioButtonsListControlComponent implements ControlValueAccessor {
  @Input({ required: true }) public variants!: FormChoiceGroup[];
  @Input() public title!: string;

  public radioButtonControl: FormControl = new FormControl();

  private onTouched!: () => void;
  private onChange!: (_: string) => void;

  constructor(@Self() public readonly ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  public writeValue(value: FormChoiceGroup): void {
    this.radioButtonControl.setValue(value);
  }

  public registerOnChange(fn: (_: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public onRadioButtonSelect({ value } : RadioButtonClickEvent): void {
    this.onChange(value.key);
  }
}
