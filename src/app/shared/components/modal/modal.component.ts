import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
    isOpened$!: Observable<boolean>;

    constructor(private modalService: ModalService) {}

    ngOnInit() {
        this.isOpened$ = this.modalService.isOpened;
    }

    close() {
        this.modalService.close();
    }
}
