import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketsRoutingModule } from './baskets-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BasketsComponent } from './baskets.component';
import { ShellModule } from '../shell/shell.module';
import { BasketCardComponent } from './components/basket-card/basket-card.component';
import { InvoiceModalComponent } from './components/invoice-modal/invoice-modal.component';

@NgModule({
    imports: [CommonModule, SharedModule, ShellModule, BasketsRoutingModule],
    declarations: [BasketsComponent, BasketCardComponent, InvoiceModalComponent],
})
export class BasketsModule {}
