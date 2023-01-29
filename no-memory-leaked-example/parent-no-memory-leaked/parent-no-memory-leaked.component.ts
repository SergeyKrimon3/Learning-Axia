import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap, timer } from 'rxjs';

@Component({
    selector: 'app-parent-no-memory-leaked',
    templateUrl: './parent-no-memory-leaked.component.html',
    styleUrls: ['./parent-no-memory-leaked.component.scss']
})
export class ParentNoMemoryLeakedComponent implements OnInit, OnDestroy {
    public componentId: number = 0;
    public counter: number = 0;
    public counterSubscription: Subscription = new Subscription();

    public ngOnInit(): void {
        this.componentId = new Date().getTime();
        console.log('ID atual', this.componentId);
        this.counterSubscription = timer(0, 1000)
            .pipe(tap(counter => {
                console.log(`Contando - ID: ${this.componentId} ${counter}`);
            }))
            .subscribe(counter => {
                this.counter = counter;
            });
    }

    public ngOnDestroy(): void {
        this.counterSubscription.unsubscribe();
        console.log(`Contando - ID: ${this.componentId} Parou no ${this.counter}`);
    }
}