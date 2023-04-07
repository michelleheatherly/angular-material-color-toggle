import { Component } from '@angular/core';
import { NavigationService } from './navigation.service';
import { SidenavService } from './sidenav/sidenav.service';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
    dark: boolean = false;

    constructor(protected navigationService: NavigationService, protected sidenavService: SidenavService) {
        this.dark = this.navigationService.getDark();
    }

    protected toggleSidenav() {
        this.sidenavService.toggle()
    }
}
