import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    @ViewChild('checkoutLink') inputCheckoutElement;
    @ViewChild('pricingLink') inputPricingElement;
    constructor(public location: Location, private element: ElementRef) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        window.addEventListener('scroll', this.scroll, true);
    }

    scroll = (): void => {
        const checkoutElement = this.inputCheckoutElement.nativeElement;
        const pricingElement = this.inputPricingElement.nativeElement;
        const number = window.scrollY;
            if (number > 50 || window.pageYOffset > 50) {
                checkoutElement.classList.remove('btn-outline-neutral');
                checkoutElement.classList.add('btn-outline-neutral-scroll-down');
                pricingElement.classList.remove('btn-outline-neutral');
                pricingElement.classList.add('btn-outline-neutral-scroll-down');
            } else {
                checkoutElement.classList.remove('btn-outline-neutral-scroll-down');
                checkoutElement.classList.add('btn-outline-neutral');
                pricingElement.classList.remove('btn-outline-neutral-scroll-down');
                pricingElement.classList.add('btn-outline-neutral');
            }
      };

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }
}
