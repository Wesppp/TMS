import { Component, DestroyRef, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { AsyncPipe, NgClass, NgOptimizedImage, NgStyle } from '@angular/common';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { NavigationLink } from '../../models/nav-link.interface';
import { NAV_LINKS } from '../../constants/nav-links';
import { AuthState } from '../../../store/auth/auth.state';
import { isLoggedInSelector } from '../../../store/auth/auth.selectors';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,
    NgClass,
    NgStyle,
    AsyncPipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public isLoggedIn$: Observable<boolean> = of(false);

  public navLinks: NavigationLink[] = NAV_LINKS;
  public isHomePage: boolean = false;

  constructor(private readonly router: Router,
              private readonly destroyRef: DestroyRef,
              private readonly store: Store<AuthState>) {
  }

  public ngOnInit(): void {
    this.isLoggedIn$ = this.store.select(isLoggedInSelector)

    this.router.events.pipe(
     takeUntilDestroyed(this.destroyRef)
    ).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = this.router.url.includes('home');
      }
    });
  }
}
