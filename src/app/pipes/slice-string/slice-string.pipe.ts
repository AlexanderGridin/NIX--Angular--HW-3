import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceString'
})
export class SliceStringPipe implements PipeTransform {

  transform(value: string, start?: number, end?: number): string {
    if (!start && !end) {
      return value.slice(0);
    }

    if (!start) {
      return value.slice(0, end);
    }

    if (!end) {
      return value.slice(start);
    }

    return value.slice(start, end);
  }

}
