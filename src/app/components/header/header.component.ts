import { Component, DestroyRef, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { NgClass, NgOptimizedImage, NgStyle } from '@angular/common';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { NavigationLink } from '../../models/nav-link.interface';
import { navLinks } from '../../constants/nav-links';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,
    NgClass,
    NgStyle
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public navLinks: NavigationLink[] = navLinks;
  public isHomePage: boolean = false;

  constructor(private readonly router: Router,
              private readonly destroyRef: DestroyRef) {
  }

  public ngOnInit(): void {
    this.router.events.pipe(
     takeUntilDestroyed(this.destroyRef)
    ).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = this.router.url.includes('home');
      }
    });
  }
}
