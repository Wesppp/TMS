import { Component, Input } from '@angular/core';

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
}
