import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { HomeComponent } from './home.component';
import { PricingComponent } from '../pricing/pricing.component';
import { PricingHomeComponent } from '../pricing-home/pricing-home.component';
import { TestComponent } from "../test/test.component";
import { MaterialModule  } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule
        
    ],
    declarations: [ HomeComponent, PricingComponent,PricingHomeComponent,TestComponent ],
    exports:[ HomeComponent, PricingComponent, PricingHomeComponent ],
    providers: []
})
export class HomeModule { }
