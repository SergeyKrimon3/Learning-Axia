import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNoMemoryLeakedComponent } from './parent-no-memory-leaked.component';

describe('ParentNoMemoryLeakedComponent', () => {
    let component: ParentNoMemoryLeakedComponent;
    let fixture: ComponentFixture<ParentNoMemoryLeakedComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ParentNoMemoryLeakedComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ParentNoMemoryLeakedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});