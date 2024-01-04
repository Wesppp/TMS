import { Component, Input } from '@angular/core';
import { NgClass, UpperCasePipe } from '@angular/common';

import { CategoryCard } from '../../models/category-card.interface';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [
    UpperCasePipe,
    NgClass,
  ],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent {
  @Input({ required: true }) public categoryCard!: CategoryCard;
  @Input() public isLongCard: boolean = false;
}
