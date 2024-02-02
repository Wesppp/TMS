import { createReducer, on } from '@ngrx/store';

import { AppLoadingState, initialState } from '@store/app-loading/app-loading.state';
import { addLoadingAction, removeLoadingAction } from "@store/app-loading/actions/loading-crud.action";

export const appLoadingReducer = createReducer(
  initialState,
  on(addLoadingAction,
    (state: AppLoadingState, { loadingName }) => ({
      ...state,
      loadings: state.loadings.add(loadingName)
    })
  ),
  on(removeLoadingAction,
    (state: AppLoadingState, { loadingName }) => {
      const loadings: Set<string> = new Set(state.loadings);

      loadings.delete(loadingName);

      return {
        ...state,
        loadings
      };
    }
  ),
);
