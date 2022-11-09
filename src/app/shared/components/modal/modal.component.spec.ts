import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalService } from '../../services/modal.service';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
    let component: ModalComponent;
    let fixture: ComponentFixture<ModalComponent>;
    let modalService: ModalService;
    const el = (selector: string) => fixture.nativeElement.querySelector(selector);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModalComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ModalComponent);
        modalService = TestBed.inject(ModalService);
        component = fixture.componentInstance;
        modalService.open();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display close button', () => {
        const closeButton = el('[data-test="close-btn"]').textContent;
        expect(closeButton).toBeDefined();
    });

    it('should display header content', () => {
        const headerContent = el('[data-test="modal-header"]').textContent;
        expect(headerContent).toBeDefined();
    });

    it('should display body content', () => {
        const bodyContent = el('[data-test="modal-body"]').textContent;
        expect(bodyContent).toBeDefined();
    });

    it('should display footer content', () => {
        const footerContent = el('[data-test="modal-footer"]').textContent;
        expect(footerContent).toBeDefined();
    });

    it('should close modal on close button click', () => {
        spyOn(modalService, 'close');
        const closeButton = el('[data-test="close-btn"]');
        closeButton.click();
        fixture.detectChanges();
        expect(modalService.close).toHaveBeenCalled();
    });
});
