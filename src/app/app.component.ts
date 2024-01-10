import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { Store } from '@ngrx/store';

import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { PersistenceService } from '@services/persistence.service';
import { AuthTokensEnum } from '@enums/auth-tokens.enum';
import { setIsLoggedInAction } from '@store/auth/actions/set-isLoggedIn.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private readonly persistence: PersistenceService,
              private readonly store: Store) {
  }

  public ngOnInit(): void {
    const token: string | null = this.persistence.getToken(AuthTokensEnum.ACCESS_TOKEN);

    this.store.dispatch(setIsLoggedInAction({ isLoggedIn: !!token }));
  }
}
