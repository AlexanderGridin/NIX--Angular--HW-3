import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice'
})
export class FormatPricePipe implements PipeTransform {

  transform(value: number): string {
    let numberString: string = value.toString();
    let numberComponents: string[] = numberString.replace(',', '.').split('.');
    let numberDecimals: string = numberComponents[1];

    if (numberComponents.length === 1) {
      return `${numberComponents[0]}.00`;
    }

    if (numberComponents.length === 2 && numberDecimals.length === 1) {
      numberComponents[1] = `${numberDecimals}0`;
      return numberComponents.join('.');
    }

    return numberString;
  }

}
