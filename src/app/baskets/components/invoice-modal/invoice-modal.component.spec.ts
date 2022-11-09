import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalService } from 'src/app/shared/services/modal.service';

import { InvoiceModalComponent } from './invoice-modal.component';

describe('InvoiceModalComponent', () => {
    let component: InvoiceModalComponent;
    let fixture: ComponentFixture<InvoiceModalComponent>;
    let modalService: ModalService;
    const el = (selector: string) => fixture.nativeElement.querySelector(selector);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InvoiceModalComponent],
        }).compileComponents();
        modalService = TestBed.inject(ModalService);
        fixture = TestBed.createComponent(InvoiceModalComponent);
        const baskets = require('../../../../assets/baskets.json');
        modalService.data = baskets[0];
        component = fixture.componentInstance;
        component.ngOnInit();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show invoice modal header', () => {
        const invoiceModalHeader = el('[data-test="invoice-modal-header"]').textContent;
        expect(invoiceModalHeader).toBeDefined();
    });

    it('should show invoice modal header', () => {
        const ordersInvoices = fixture.nativeElement.querySelectorAll('[data-test="order-invoice"]');
        expect(ordersInvoices.length).toBe(3);
    });

    it('should show invoice tax total amount', () => {
        const taxTotalAmount = el('[data-test="invoice-tax-total-amount"]').textContent;
        expect(taxTotalAmount).toBeDefined();
    });

    it('should show invoice total amount', () => {
        const totalAmount = el('[data-test="invoice-total-amount"]').textContent;
        expect(totalAmount).toBeDefined();
    });
});
