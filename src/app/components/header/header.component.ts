import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe, NgClass, NgOptimizedImage, NgStyle, NgTemplateOutlet } from '@angular/common';

import { NavigationLink } from '@models/nav-link.interface';
import { NAV_LINKS } from '@constants/nav-links';
import { AccountActions } from '@models/account-actions.interface';
import { ACCOUNT_ACTIONS } from '@constants/account-actions';

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
export class HeaderComponent {
  @Input({ required: true }) public isLoggedIn: boolean | null = false;
  @Input() public isSecondHeader: boolean | null = false;

  public navLinks: NavigationLink[] = NAV_LINKS;
  public accountActions: AccountActions[] = ACCOUNT_ACTIONS;
}
