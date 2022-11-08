import { TestBed } from '@angular/core/testing';
import { OrderInvoiceService } from './order-invoice.service';

describe('OrderInvoiceService', () => {
    let orderInvoiceService: OrderInvoiceService;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        orderInvoiceService = TestBed.inject(OrderInvoiceService);
    });

    it('should be created', () => {
        expect(orderInvoiceService).toBeTruthy();
    });

    describe('shoud generate invoice orders for Basket 1 ', () => {
        const baskets = require('../../../assets/baskets.json');
        const orders = baskets[0].orders;
        it('should calculate pttc', () => {
            const product1Pttc = orderInvoiceService.calculatePttc(orders[0]);
            const product2Pttc = orderInvoiceService.calculatePttc(orders[1]);
            const product3Pttc = orderInvoiceService.calculatePttc(orders[2]);

            expect(product1Pttc).toBe(27.5);
            expect(product2Pttc).toBe(18);
            expect(product3Pttc).toBe(2.55);
        });

        it('should calculate tax amount', () => {
            const product1TaxAmount = orderInvoiceService.calculateTaxAmount(orders[0]);
            const product2TaxAmount = orderInvoiceService.calculateTaxAmount(orders[1]);
            const product3TaxAmount = orderInvoiceService.calculateTaxAmount(orders[2]);
            expect(product1TaxAmount).toBe(2.5);
            expect(product2TaxAmount).toBe(3);
            expect(product3TaxAmount).toBe(0);
        });
    });

    describe('shoud generate invoice orders for Basket 2 ', () => {
        const baskets = require('../../../assets/baskets.json');
        const orders = baskets[1].orders;
        it('should calculate pttc', () => {
            const product1Pttc = orderInvoiceService.calculatePttc(orders[0]);
            const product2Pttc = orderInvoiceService.calculatePttc(orders[1]);

            expect(product1Pttc).toBe(21);
            expect(product2Pttc).toBe(178.15);
        });

        it('should calculate tax amount', () => {
            const product1TaxAmount = orderInvoiceService.calculateTaxAmount(orders[0]);
            const product2TaxAmount = orderInvoiceService.calculateTaxAmount(orders[1]);

            expect(product1TaxAmount).toBe(1);
            expect(product2TaxAmount).toBe(35.65);
        });
    });

    describe('shoud generate invoice orders for Basket 3 ', () => {
        const baskets = require('../../../assets/baskets.json');
        const orders = baskets[2].orders;
        it('should calculate pttc', () => {
            const product1Pttc = orderInvoiceService.calculatePttc(orders[0]);
            const product2Pttc = orderInvoiceService.calculatePttc(orders[1]);
            const product3Pttc = orderInvoiceService.calculatePttc(orders[2]);
            const product4Pttc = orderInvoiceService.calculatePttc(orders[3]);

            expect(product1Pttc).toBe(70);
            expect(product2Pttc).toBe(22.8);
            expect(product3Pttc).toBe(29.25);
            expect(product4Pttc).toBe(23.65);
        });

        it('should calculate tax amount', () => {
            const product1TaxAmount = orderInvoiceService.calculateTaxAmount(orders[0]);
            const product2TaxAmount = orderInvoiceService.calculateTaxAmount(orders[1]);
            const product3TaxAmount = orderInvoiceService.calculateTaxAmount(orders[2]);
            const product4TaxAmount = orderInvoiceService.calculateTaxAmount(orders[3]);

            expect(product1TaxAmount).toBe(14);
            expect(product2TaxAmount).toBe(3.8);
            expect(product3TaxAmount).toBe(0);
            expect(product4TaxAmount).toBe(1.15);
        });
    });
});
