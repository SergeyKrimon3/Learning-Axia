import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMemoryLeakedExampleComponent } from './no-memory-leaked-example.component';

describe('NoMemoryLeakedExampleComponent', () => {
    let component: NoMemoryLeakedExampleComponent;
    let fixture: ComponentFixture<NoMemoryLeakedExampleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NoMemoryLeakedExampleComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(NoMemoryLeakedExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});