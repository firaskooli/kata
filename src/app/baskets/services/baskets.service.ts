import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Basket } from 'src/app/shared/models/basket';

@Injectable({
    providedIn: 'root',
})
export class BasketsService {
    constructor(private httpClient: HttpClient) {}

    fetchAll(): Observable<Basket[]> {
        return this.httpClient.get<Basket[]>('assets/baskets.json');
    }
}
