import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  public transform<T>(data: T[] | null, key: keyof T, search: string): T[] | null {
    if (!data || !key || !search) {
      return data;
    }

    return data.filter(value => (value[key] as string).toLowerCase().includes(search.toLowerCase()));
  }

}
