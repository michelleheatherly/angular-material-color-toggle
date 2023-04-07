import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SidenavService {
    open: boolean = false;
    @Output() toggleSidenav: EventEmitter<boolean> = new EventEmitter(false);

    constructor() { }

    public toggle() {
        this.open = !this.open;
        this.toggleSidenav.emit(this.open);
    }
}