import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {
  public setToken(key: string, token: string): void {
    try {
      sessionStorage.setItem(key, token);
    } catch (err) {
      console.log('Error saving token to sessionStorage', err);
    }
  }

  public getToken(key: string): string | null {
    try {
      return sessionStorage.getItem(key);
    } catch (err) {
      console.log('Error getting token from sessionStorage', err)
    }

    return null
  }

  public removeToken(key: string): void {
    sessionStorage.removeItem(key);
  }
}
