import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared/shared.module';
import { ShellModule } from '../../shell/shell.module';

import { BasketsResolver } from './baskets.resolver';

describe('BasketsResolver', () => {
    let resolver: BasketsResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, ShellModule, HttpClientTestingModule, RouterTestingModule],
        });
        resolver = TestBed.inject(BasketsResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
