import { Injectable } from '@angular/core';
import { NumberFormatter } from 'src/app/shared/helpers/number-formatter';
import { Basket } from 'src/app/shared/models/basket';
import { Invoice } from 'src/app/shared/models/invoice';
import { Order } from 'src/app/shared/models/order';
import { OrderInvoice } from 'src/app/shared/models/order-invoice';

import { OrderInvoiceService } from './order-invoice.service';

@Injectable({
    providedIn: 'root',
})
export class InvoiceService {
    constructor(private orderInvoiceService: OrderInvoiceService) {}

    generateInvoice(basket: Basket): Invoice {
        const ordersInvoices: OrderInvoice[] = basket?.orders.map((order: Order) => {
            const pht = this.orderInvoiceService.calculatePht(order);
            const pttc = this.orderInvoiceService.calculatePttc(order);
            const taxAmount = this.orderInvoiceService.calculateTaxAmount(order);
            return {
                order: order,
                pht: pht,
                pttc: pttc,
                taxAmount: taxAmount,
            };
        });
        const taxTotalAmount = this.calculateTaxTotalAmount(basket);
        const totalAmount = this.calculateTotalAmount(basket);

        return {
            ordersInvoices: ordersInvoices,
            taxTotalAmount: NumberFormatter.toFixed(taxTotalAmount),
            totalAmount: NumberFormatter.roundToFiveDecimalPlaces(totalAmount),
        };
    }

    private calculateTotalAmount(basket: Basket): number {
        return basket?.orders
            .map((order: Order) => {
                return this.orderInvoiceService.calculatePttc(order);
            })
            .reduce((sum, pttc) => sum + pttc, 0);
    }

    private calculatePht(basket: Basket): number {
        return basket?.orders
            .map((order: Order) => {
                return this.orderInvoiceService.calculatePht(order);
            })
            .reduce((sum, pht) => sum + pht, 0);
    }

    private calculateTaxTotalAmount(basket: Basket): number {
        const invoiceTotalAmount = this.calculateTotalAmount(basket);
        const invoicePht = this.calculatePht(basket);
        return invoiceTotalAmount - invoicePht;
    }
}
