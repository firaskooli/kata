import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellService } from '../shell/services/shell.service';
import { BasketsComponent } from './baskets.component';
import { BasketsResolver } from './resolvers/baskets.resolver';

const routes: Routes = [
    ShellService.childRoutes([
        {
            path: '',
            component: BasketsComponent,
            resolve: {
                baskets: BasketsResolver,
            },
        },
    ]),
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BasketsRoutingModule {}
