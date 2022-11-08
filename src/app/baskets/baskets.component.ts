import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Basket } from '../shared/models/basket';

@Component({
    selector: 'app-baskets',
    templateUrl: './baskets.component.html',
    styleUrls: ['./baskets.component.scss'],
})
export class BasketsComponent implements OnInit {
    constructor(private activatedRoute: ActivatedRoute) {}
    baskets: Basket[] = [];
    ngOnInit(): void {
        this.activatedRoute.data.subscribe(({ baskets }) => {
            this.baskets = baskets;
        });
    }
}
