import { Component } from '@angular/core';

@Component({
    selector: 'calendar',
    template: `
    <h2>{{ getTitleOfPage() }}</h2>
    <ul>
        <li *ngFor="let i of scipio_availability">
            {{ i }}
        </li>
    </ul>
    `
})

export class CalendarComponent {
    title = "The Scipio Calendar!";
    scipio_availability = ["Tuesday", "Thursday", "Friday"];

    getTitleOfPage() {
        return this.title;
    }
}