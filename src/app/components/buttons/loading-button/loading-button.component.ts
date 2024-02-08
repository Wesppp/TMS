import { Component, Input } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: 'app-loading-button',
  standalone: true,
  imports: [
    ButtonModule,
    AsyncPipe
  ],
  templateUrl: './loading-button.component.html',
  styleUrl: './loading-button.component.scss'
})
export class LoadingButtonComponent {
  @Input() public label!: string;
  @Input() public isLoading!: boolean;
  @Input() public isDisabled!: boolean;
}
