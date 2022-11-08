import { Component, Input, OnInit } from '@angular/core';
import { Basket } from 'src/app/shared/models/basket';

@Component({
    selector: 'app-basket-card',
    templateUrl: './basket-card.component.html',
    styleUrls: ['./basket-card.component.scss'],
})
export class BasketCardComponent implements OnInit {
    @Input() basket!: Basket;
    constructor() {}

    ngOnInit(): void {}
}
