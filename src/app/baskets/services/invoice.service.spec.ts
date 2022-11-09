import { TestBed } from '@angular/core/testing';
import { Invoice } from 'src/app/shared/models/invoice';

import { InvoiceService } from './invoice.service';

describe('InvoiceService', () => {
    let invoiceService: InvoiceService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        invoiceService = TestBed.inject(InvoiceService);
    });

    it('should be created', () => {
        expect(invoiceService).toBeTruthy();
    });

    describe('shoud generate invoice for Basket 1 ', () => {
        const baskets = require('../../../assets/baskets.json');
        const basket = baskets[0];
        it('should calculate pttc', () => {
            const invoice: Invoice = invoiceService.generateInvoice(basket);
            expect(invoice.totalAmount).toBe(48.05);
        });

        it('should calculate tax amount', () => {
            const invoice: Invoice = invoiceService.generateInvoice(basket);
            expect(invoice.taxTotalAmount).toBe(5.53);
        });
    });

    describe('shoud generate invoice for Basket 2 ', () => {
        const baskets = require('../../../assets/baskets.json');
        const basket = baskets[1];
        it('should calculate pttc', () => {
            const invoice: Invoice = invoiceService.generateInvoice(basket);
            expect(invoice.totalAmount).toBe(199.15);
        });

        it('should calculate tax amount', () => {
            const invoice: Invoice = invoiceService.generateInvoice(basket);
            expect(invoice.taxTotalAmount).toBe(36.65);
        });
    });

    describe('shoud generate invoice for Basket 3 ', () => {
        const baskets = require('../../../assets/baskets.json');
        const basket = baskets[2];
        it('should calculate pttc', () => {
            const invoice: Invoice = invoiceService.generateInvoice(basket);
            expect(invoice.totalAmount).toBe(145.7);
        });

        it('should calculate tax amount', () => {
            const invoice: Invoice = invoiceService.generateInvoice(basket);
            expect(invoice.taxTotalAmount).toBe(18.98);
        });
    });
});
