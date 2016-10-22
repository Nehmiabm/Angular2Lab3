import { Pipe, PipeTransform } from '@angular/core';
/*
 * Calculate product total price given product quantity
 * Usage:
 *   pricevalue | calculatPrice:quantity
*/
@Pipe({ name: 'calculatePrice' })
export class CalculatePricePipe implements PipeTransform {
    transform(price: number, quantity: number): number {
        return price * quantity;
    }
}
