import { Component } from '@angular/core';

@Component({
    selector: 'price-calculator',
    template: `
    <h2>Price Calculator</h2>
    <div>Price: <input [(ngModel)]="price"></div>
    <div>Quantity: <input [(ngModel)]="quantity"></div>
    <p>
      Total Price: {{price | calculatePrice: quantity}}
    </p>`
})
export class AppComponent {
    price: number = 200;
    quantity: number = 5;
}
