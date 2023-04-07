import { Component, Input, SimpleChanges, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidenavService } from './sidenav.service';

@Component({
    selector: 'sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
    @ViewChild('sidenav') sidenav: any;
    navSub: Subscription = new Subscription();

    constructor(private cd: ChangeDetectorRef, private sidenavService: SidenavService) { }

    ngOnInit() {
        this.navSub = this.sidenavService.toggleSidenav.subscribe(() => { this.toggleSideNav() });
    }

    ngOnDestroy() {
        this.navSub.unsubscribe();
    }

    private toggleSideNav() {
        if (this.sidenav) {
            this.sidenav.toggle();
        }
    }
}
