import { Component, Input, Self } from '@angular/core';
import { NgForOf } from "@angular/common";

import { AccordionModule } from "primeng/accordion";

import { AccordionControlElement } from "@models/accordion-control-element.interface";
import { ControlValueAccessor, NgControl } from "@angular/forms";

@Component({
  selector: 'app-accordion-control',
  standalone: true,
  imports: [
    AccordionModule,
    NgForOf,
  ],
  templateUrl: './accordion-control.component.html',
  styleUrls: [
    './accordion-control.component.scss',
    '../controls.scss'
  ]
})
export class AccordionControlComponent implements ControlValueAccessor {
  @Input({ required: true }) public accordionElements!: AccordionControlElement[] | null;

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

  public onSelect(value: string): void {
    this.onChange(value);
  }
}
