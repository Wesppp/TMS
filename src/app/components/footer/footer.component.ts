import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { NavigationLink } from '../../models/nav-link.interface';
import { NAV_LINKS } from '../../constants/nav-links';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public navLinks: NavigationLink[] = NAV_LINKS;
}
