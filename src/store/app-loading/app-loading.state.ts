export interface AppLoadingState {
  loadings: Set<string>;
}

export const initialState: AppLoadingState = {
  loadings: new Set<string>()
}

export const appLoadingFeatureKey: string = 'appLoading';
