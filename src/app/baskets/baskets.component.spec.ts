import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { SharedModule } from '../shared/shared.module';
import { ShellModule } from '../shell/shell.module';

import { BasketsComponent } from './baskets.component';

describe('BasketsComponent', () => {
    let component: BasketsComponent;
    let fixture: ComponentFixture<BasketsComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BasketsComponent],
            imports: [SharedModule, ShellModule, HttpClientTestingModule, RouterTestingModule],
        }).compileComponents();
        fixture = TestBed.createComponent(BasketsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show baskets cards', () => {
        const baskets = require('../../assets/baskets.json');
        component.baskets = baskets;
        fixture.detectChanges();
        const basketsCards = fixture.nativeElement.querySelectorAll('[data-test="basket-card"]');
        expect(basketsCards.length).toBe(3);
    });
});
