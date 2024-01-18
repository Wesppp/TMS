export interface HeaderState {
  isSecondHeader: boolean;
}

export const initialState: HeaderState = {
  isSecondHeader: false,
}

export const headerFeatureKey: string = 'header';
