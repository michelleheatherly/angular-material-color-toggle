import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SidenavComponent } from './sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from './sidenav.service';


@NgModule({
    declarations: [
        SidenavComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatListModule,
        MatSidenavModule
    ],
    providers: [SidenavService],
    exports: [SidenavComponent]
})
export class SidenavModule { }
