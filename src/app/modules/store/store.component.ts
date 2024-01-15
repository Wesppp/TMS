import { Component } from '@angular/core';
import {FooterComponent} from "@components/footer/footer.component";
import {HeaderComponent} from "@components/header/header.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-store',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent,
        RouterOutlet
    ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {

}
