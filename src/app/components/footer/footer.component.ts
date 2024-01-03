import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { NavigationLink } from '../../models/nav-link.interface';

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
  public navLinks: NavigationLink[] = [
    { label: 'Home', link: '#' },
    { label: 'Shop', link: '#' },
    { label: 'Account', link: '#' },
    { label: 'Pages', link: '#' },
    { label: 'Blog', link: '#' },
  ];
}
