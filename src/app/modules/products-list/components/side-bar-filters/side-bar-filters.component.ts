import { Component } from '@angular/core';
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: 'app-side-bar-filters',
  standalone: true,
  imports: [
    InputTextModule
  ],
  templateUrl: './side-bar-filters.component.html',
  styleUrl: './side-bar-filters.component.scss'
})
export class SideBarFiltersComponent {

}
