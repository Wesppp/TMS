import { AccountActions } from '@models/account-actions.interface';

export const ACCOUNT_ACTIONS: AccountActions[] = [
  {
    iconSrc: 'assets/icons/favorite-white.svg',
    iconSecondSrc: 'assets/icons/favorite-black.svg',
    alt: 'favorite',
    width: 50,
    height: 50,
    route: './favorite',
  },
  {
    iconSrc: 'assets/icons/basket-white.svg',
    iconSecondSrc: 'assets/icons/basket-black.svg',
    alt: 'basket',
    width: 50,
    height: 50,
    route: './cart',
  },
];
