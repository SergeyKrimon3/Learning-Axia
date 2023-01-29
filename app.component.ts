import { Component } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public setColors: boolean = false;
    public urls: Array<string> = [];
    title = '@angular/cli';

    constructor(
        private readonly router: Router,
    ) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                this.urls.push(event.url);
                this.setColors = event.url.includes('/no-memory-leaked-example');
            }
        });
    }
}
