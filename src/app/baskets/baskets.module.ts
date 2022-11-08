import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketsRoutingModule } from './baskets-routing.module';
import { BasketCardComponent } from './basket-card/basket-card.component';
import { SharedModule } from '../shared/shared.module';
import { BasketsComponent } from './baskets.component';
import { ShellModule } from '../shell/shell.module';

@NgModule({
    imports: [CommonModule, SharedModule, ShellModule, BasketsRoutingModule],
    declarations: [BasketsComponent, BasketCardComponent],
})
export class BasketsModule {}
