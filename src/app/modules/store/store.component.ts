import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { AsyncPipe } from "@angular/common";

import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { ToastModule } from "primeng/toast";

import { FooterComponent } from "@components/footer/footer.component";
import { HeaderComponent } from "@components/header/header.component";
import { isLoggedInSelector } from "@store/auth/auth.selectors";
import { isSecondHeaderSelector } from "@store/header/header.selectors";

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterOutlet,
    AsyncPipe,
    ToastModule
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent implements OnInit {
  public isLoggedIn$!: Observable<boolean>;
  public isSecondHeader$!: Observable<boolean>;

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
