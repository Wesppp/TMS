import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  @Input() public totalCost: number | null = 0;
  @Input() public productsAmount: number = 0;
}
