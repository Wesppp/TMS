import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe, NgClass, NgOptimizedImage, NgStyle, NgTemplateOutlet } from '@angular/common';

import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { NavigationLink } from '@models/nav-link.interface';
import { NAV_LINKS } from '@constants/nav-links';
import { isLoggedInSelector } from '@store/auth/auth.selectors';
import { AccountActions } from '@models/account-actions.interface';
import { ACCOUNT_ACTIONS } from '@constants/account-actions';
import { isSecondHeaderSelector } from "@store/header/header.selectors";

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
    NgTemplateOutlet,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public isLoggedIn$: Observable<boolean> = of(false);
  public isSecondHeader$: Observable<boolean> = of(false);

  public navLinks: NavigationLink[] = NAV_LINKS;
  public accountActions: AccountActions[] = ACCOUNT_ACTIONS;

  constructor(private readonly store: Store) {
  }

  public ngOnInit(): void {
    this.initializeValues();
  }

  private initializeValues(): void {
    this.isLoggedIn$ = this.store.select(isLoggedInSelector);
    this.isSecondHeader$ = this.store.select(isSecondHeaderSelector);
  }
}
