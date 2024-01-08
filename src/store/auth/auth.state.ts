export interface AuthState {
  isSubmitting: boolean;
  isLoggedIn: boolean;
}

export const initialState: AuthState = {
  isSubmitting: false,
  isLoggedIn: false,
}

export const authFeatureKey: string = 'auth';
