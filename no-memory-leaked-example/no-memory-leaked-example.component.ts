import { Component } from '@angular/core';

@Component({
    selector: 'app-no-memory-leaked-example',
    templateUrl: './no-memory-leaked-example.component.html',
    styleUrls: ['./no-memory-leaked-example.component.scss']
})
export class NoMemoryLeakedExampleComponent {
    public score: boolean = false;

    public stoppedDestroy(): void {
        this.score = false;
    }

    public startCounter() {
        this.score = true;
    }
}