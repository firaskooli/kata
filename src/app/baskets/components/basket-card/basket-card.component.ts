import { Component, Input, OnInit } from '@angular/core';
import { Basket } from 'src/app/shared/models/basket';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
    selector: 'app-basket-card',
    templateUrl: './basket-card.component.html',
    styleUrls: ['./basket-card.component.scss'],
})
export class BasketCardComponent implements OnInit {
    @Input() basket!: Basket;
    constructor(private modalService: ModalService) {}

    ngOnInit(): void {}

    openInvoiceModal() {
        this.modalService.open();
        this.modalService.data = this.basket;
    }
}
