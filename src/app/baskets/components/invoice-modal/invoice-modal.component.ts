import { Component, OnInit } from '@angular/core';
import { Basket } from 'src/app/shared/models/basket';
import { Invoice } from 'src/app/shared/models/invoice';
import { ModalService } from 'src/app/shared/services/modal.service';
import { InvoiceService } from '../../services/invoice.service';

@Component({
    selector: 'app-invoice-modal',
    templateUrl: './invoice-modal.component.html',
    styleUrls: ['./invoice-modal.component.scss'],
})
export class InvoiceModalComponent implements OnInit {
    constructor(private modalService: ModalService, private invoiceService: InvoiceService) {}
    invoice!: Invoice;
    ngOnInit(): void {
        this.modalService.data.subscribe((basket: Basket) => {
            this.invoice = this.invoiceService.generateInvoice(basket);
        });
    }
}
