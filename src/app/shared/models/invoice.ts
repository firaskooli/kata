import { OrderInvoice } from './order-invoice';

export interface Invoice {
    ordersInvoices: OrderInvoice[];
    taxTotalAmount: number;
    totalAmount: number;
}
