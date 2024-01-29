import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  @Input() private set id(productId: string) {
    console.log(productId)
  }
}
