import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from "@angular/forms";

import { CheckboxChangeEvent, CheckboxModule } from "primeng/checkbox";

import { FormChoiceGroup } from "@models/form-choice-group.interface";

@Component({
  selector: 'app-checkbox-list-control',
  standalone: true,
  imports: [
    CheckboxModule
  ],
  templateUrl: './checkbox-list-control.component.html',
  styleUrls: [
    './checkbox-list-control.component.scss',
    '../controls.scss'
  ]
})
export class CheckboxListControlComponent implements ControlValueAccessor {
  @Input({ required: true }) public variants!: FormChoiceGroup[];
  @Input() public title!: string;

  public checkboxesControl: FormControl = new FormControl();
  public checkboxValues: string[] = [];

  private onTouched!: () => void;
  private onChange!: (_: string[]) => void;

  constructor(@Self() public readonly ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  public writeValue(value: string[]): void {}

  public registerOnChange(fn: (_: string[]) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public onCheckboxSelect(item: FormChoiceGroup, { checked }: CheckboxChangeEvent): void {
    if(checked.length) {
      this.checkboxValues = [...this.checkboxValues, item.key];
    } else {
      this.checkboxValues = this.checkboxValues.filter(value => value !== item.key);
    }

    this.onChange(this.checkboxValues);
  }
}
