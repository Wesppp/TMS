export interface AuthState {
  isLoggedIn: boolean;
}

export const initialState: AuthState = {
  isLoggedIn: false,
}

export const authFeatureKey: string = 'auth';
