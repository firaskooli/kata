import { Injectable } from '@angular/core';
import { NumberFormatter } from 'src/app/shared/helpers/number-formatter';
import { Order } from 'src/app/shared/models/order';

@Injectable({
    providedIn: 'root',
})
export class OrderInvoiceService {
    constructor() {}

    calculatePht(order: Order): number {
        return order.product.price * order.quantity;
    }

    calculatePttc(order: Order): number {
        const pttc = this.calculatePht(order) + this.calculateTaxAmount(order);
        return NumberFormatter.roundToFiveDecimalPlaces(pttc);
    }

    calculateTaxAmount(order: Order): number {
        let tax = order.product.category.tax;
        if (order.product.isImported) {
            tax += 5;
        }
        const taxAmount = (this.calculatePht(order) * tax) / 100;
        return NumberFormatter.roundToFiveDecimalPlaces(taxAmount);
    }
}
