import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Basket } from '../shared/models/basket';
import { BasketsService } from './baskets.service';

@Injectable({
    providedIn: 'root',
})
export class BasketsResolver implements Resolve<Basket[]> {
    constructor(private basketsService: BasketsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Basket[]> {
        return this.basketsService.fetchAll();
    }
}
