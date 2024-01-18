import { createReducer, on } from "@ngrx/store";
import { routerNavigatedAction } from "@ngrx/router-store";

import { HeaderState, initialState } from "@store/header/header.state";
import { SECOND_HEADER_PAGES } from "@constants/second-header-pages";

export const headerReducer = createReducer(
  initialState,
  on(routerNavigatedAction,
    (state: HeaderState, { payload }) => ({
      ...state,
      isSecondHeader: SECOND_HEADER_PAGES.some(page => payload.routerState.url.includes(page)),
    })
  )
);
