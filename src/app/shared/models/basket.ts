import { Order } from './order';

export interface Basket {
    id: number;
    orders: Order[];
}
