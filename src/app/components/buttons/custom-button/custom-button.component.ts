import { Component, Input } from '@angular/core';
import { NgClass } from "@angular/common";

import { ButtonModule } from "primeng/button";

import { ButtonIconPos } from "@enums/button-icon-pos.enum";
import { ButtonTheme } from "@enums/button-theme.enum";

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [
    ButtonModule,
    NgClass
  ],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss'
})
export class CustomButtonComponent {
  @Input() public label: string = '';
  @Input() public icon: string = '';
  @Input() public iconPos: ButtonIconPos = ButtonIconPos.RIGHT;
  @Input() public buttonTheme: ButtonTheme = ButtonTheme.PRIMARY;
  @Input() public disabled: boolean = false;

  protected readonly ButtonTheme = ButtonTheme;
}
