import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

export interface NavigationLink {
  label: string;
  link: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public navLinks: NavigationLink[] = [
    { label: 'Home', link: '#' },
    { label: 'Shop', link: '#' },
    { label: 'Account', link: '#' },
    { label: 'Pages', link: '#' },
    { label: 'Blog', link: '#' },
  ];
}
