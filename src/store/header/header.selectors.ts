import { createFeatureSelector, createSelector } from "@ngrx/store";

import { headerFeatureKey, HeaderState } from "@store/header/header.state";

export const authFeatureSelector =
  createFeatureSelector<HeaderState>(headerFeatureKey);

export const isSecondHeaderSelector = createSelector(
  authFeatureSelector,
  (headerState: HeaderState) => headerState.isSecondHeader
);
