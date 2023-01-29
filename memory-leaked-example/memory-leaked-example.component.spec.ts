import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryLeakedExampleComponent } from './memory-leaked-example.component';

describe('MemoryLeakedExampleComponent', () => {
    let component: MemoryLeakedExampleComponent;
    let fixture: ComponentFixture<MemoryLeakedExampleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MemoryLeakedExampleComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(MemoryLeakedExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});