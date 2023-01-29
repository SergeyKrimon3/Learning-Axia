import { Component } from '@angular/core';

@Component({
    selector: 'app-memory-leaked-example',
    templateUrl: './memory-leaked-example.component.html',
    styleUrls: ['./memory-leaked-example.component.scss']
})
export class MemoryLeakedExampleComponent {

    public score: boolean = false;

    public stoppedDestroy(): void {
        this.score = false;
    }

    public startCounter() {
        this.score = true;
    }
}