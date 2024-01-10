export interface AppLoadingState {
  loadings: Set<string>;
}

export const initialState: AppLoadingState = {
  loadings: new Set<string>(['object'])
}

export const appLoadingFeatureKey: string = 'appLoading';
