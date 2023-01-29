import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentMemoryLeakedComponent } from './parent-memory-leaked.component';

describe('ParentMemoryLeakedComponent', () => {
    let component: ParentMemoryLeakedComponent;
    let fixture: ComponentFixture<ParentMemoryLeakedComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ParentMemoryLeakedComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ParentMemoryLeakedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});