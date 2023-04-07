import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {

    dark: boolean = false;

    constructor() {
        this.addThemeClass();
    }

    public getDark(): boolean {
        return this.dark;
    }

    public toggleColorMode() {
        this.dark = !this.dark;
        const mode = this.dark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-bs-theme', mode);
        this.addThemeClass();
        this.removeThemeClasses();
    }

    private removeThemeClasses() {
        const mode = this.dark ? 'light' : 'dark';
        this.removeStyle(`${mode}-theme`);
    }

    private addThemeClass() {
        const mode = this.dark ? 'dark' : 'light';
        this.createLinkElementWithKey(`${mode}-theme`);
    }

    private removeStyle(key: string) {
        const existingLinkElement = this.getExistingLinkElementByKey(key);
        if (existingLinkElement) {
            document.head.removeChild(existingLinkElement);
        }
    }

    private getExistingLinkElementByKey(key: string) {
        return document.head.querySelector(`link[rel="stylesheet"].${key}`);
    }

    private createLinkElementWithKey(key: string) {
        const linkEl = document.createElement('link');
        linkEl.setAttribute('rel', 'stylesheet');
        linkEl.setAttribute('href', `assets/styles/${key}.css`);
        linkEl.setAttribute('type', 'text/css');
        linkEl.classList.add(key);
        document.head.appendChild(linkEl);
        return linkEl;
    }

}