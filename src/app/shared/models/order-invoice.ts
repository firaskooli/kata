import { Order } from './order';

export interface OrderInvoice {
    order: Order;
    pht: number;
    pttc: number;
    taxAmount: number;
}
