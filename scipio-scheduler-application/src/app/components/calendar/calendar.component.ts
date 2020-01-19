import { Component } from '@angular/core';

@Component({
    selector: 'calendar',
    template: '<h2>{{ getTitleOfPage() }}</h2>'
})

export class CalendarComponent {
    title = "The Scipio Calendar!";

    getTitleOfPage() {
        return this.title;
    }
}