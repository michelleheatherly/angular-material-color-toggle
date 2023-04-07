import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavModule } from './sidenav/sidenav.module';
import { NavigationService } from './navigation.service';
import { NavigationComponent } from './navigation.component';


@NgModule({
    declarations: [
        NavigationComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        SidenavModule
    ],
    providers: [NavigationService],
    exports: [NavigationComponent]
})
export class NavigationModule { }
