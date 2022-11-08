import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
    imports: [CommonModule],
    declarations: [HeaderComponent, FooterComponent, ModalComponent],
    exports: [HeaderComponent, FooterComponent, ModalComponent],
})
export class SharedModule {}
