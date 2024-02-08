import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SizeColorPickerValue } from "@models/size-color-picker-value.interface";

@Component({
  selector: 'app-size-color-picker',
  standalone: true,
  imports: [],
  templateUrl: './size-color-picker.component.html',
  styleUrl: './size-color-picker.component.scss'
})
export class SizeColorPickerComponent {
  @Input() public colorPicker!: string[];
  @Input() public sizePicker!: string[];
  @Input() public sizeColorValue: SizeColorPickerValue = { color: '', size: '' };
  @Output() public pickEvent: EventEmitter<SizeColorPickerValue> = new EventEmitter<SizeColorPickerValue>();

  public onPick(value: Partial<SizeColorPickerValue>): void {
    this.sizeColorValue = {
      ...this.sizeColorValue,
      ...value,
    }

    this.pickEvent.emit(this.sizeColorValue);
  }
}
