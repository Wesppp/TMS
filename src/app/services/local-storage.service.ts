import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public addElementToStorage<T>(key: string, element: T): T {
    const existingData: string | null = localStorage.getItem(key);
    const updateData: T[] = existingData ? [...JSON.parse(existingData), element] : [element];

    localStorage.setItem(key, JSON.stringify(updateData));

    return element;
  }

  public updateStorageElements<T>(key: string, elements: T[]): T[] {
    localStorage.setItem(key, JSON.stringify(elements));

    return elements;
  }

  public getStorageData<T>(key: string): T | null {
    const existingData: string | null = localStorage.getItem(key);

    if (existingData) {
      return JSON.parse(existingData);
    }

    return null;
  }
}
