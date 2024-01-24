import { Component, DestroyRef, Input, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule } from "@angular/forms";

import { SliderChangeEvent, SliderModule } from "primeng/slider";
import { InputNumberModule } from "primeng/inputnumber";
import { combineLatest, startWith } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-range-control',
  standalone: true,
  imports: [
    SliderModule,
    ReactiveFormsModule,
    InputNumberModule
  ],
  templateUrl: './range-control.component.html',
  styleUrls: [
    './range-control.component.scss',
    '../controls.scss'
  ]
})
export class RangeControlComponent implements ControlValueAccessor, OnInit {
  @Input() public title: string = 'Select a range';
  @Input({ required: true }) public maxValue!: number;

  public rangeControl: FormControl = new FormControl();
  public startRangeInput: FormControl = new FormControl<number>(0);
  public endRangeInput: FormControl = new FormControl<number>(0);

  private onTouched!: () => void;
  private onChange!: (_: number[]) => void;

  constructor(@Self() public readonly ngControl: NgControl,
              private readonly destroyRef: DestroyRef) {
    this.ngControl.valueAccessor = this;
  }

  public ngOnInit(): void {
    this.initializeControls();
    this.initializeListeners();
  }

  private initializeControls(): void {
    this.rangeControl.setValue(this.ngControl.value);
    this.setInputRangeValues(this.ngControl.value);
  }

  private initializeListeners(): void {
    combineLatest([
      this.startRangeInput.valueChanges.pipe(startWith(this.ngControl.value[0])),
      this.endRangeInput.valueChanges.pipe(startWith(this.ngControl.value[1])),
    ]).pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((rangeValues: number[]): void => {
      if(rangeValues.some(el => el > this.maxValue || el < 0)) {
        return;
      }

      this.rangeControl.setValue(rangeValues);
    });
  }

  public writeValue(value: number[]): void {}

  public registerOnChange(fn: (_: number[]) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public onRangeChange({ values }: SliderChangeEvent): void {
    if(!values) { return; }

    this.onChange(values);
    this.setInputRangeValues(values);
  }

  private setInputRangeValues(values: number[]): void {
    this.startRangeInput.setValue(values[0]);
    this.endRangeInput.setValue(values[1]);
  }
}
