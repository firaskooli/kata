import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Basket } from 'src/app/shared/models/basket';
import { BasketsService } from '../services/baskets.service';

@Injectable({
    providedIn: 'root',
})
export class BasketsResolver implements Resolve<Basket[]> {
    constructor(private basketsService: BasketsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Basket[]> {
        return this.basketsService.fetchAll();
    }
}
