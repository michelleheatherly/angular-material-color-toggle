import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from './navigation/navigation.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NavigationModule,
        ScullyLibModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
