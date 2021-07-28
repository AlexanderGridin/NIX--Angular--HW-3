import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice'
})
export class FormatPricePipe implements PipeTransform {

  transform(price: number): string {
    let priceString: string = price.toString();
    let priceParts: string[] = priceString.replace(',', '.').split('.');

    const priceWholeNumberPart: string = priceParts[0];
    const priceDecimalPart: string = priceParts[1];

    if (priceParts.length === 1) {
      return `${priceWholeNumberPart}.00`;
    }

    if (priceParts.length === 2 && priceDecimalPart.length === 1) {
      priceParts[1] = `${priceDecimalPart}0`;
      return priceParts.join('.');
    }

    return priceString;
  }

}
