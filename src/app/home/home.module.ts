import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


import { HomeComponent } from './home.component';

import { ComponentsModule } from '../components/components.module';
import { PricingComponent } from '../pricing/pricing.component';
import { PricingHomeComponent } from '../pricing-home/pricing-home.component';
import { TestComponent } from "../test/test.component";
//import { MatButton, MatButtonModule, MatDialogModule, MatCardModule } from '@angular/material';
import { MaterialModule  } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        ComponentsModule,
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule
        
    ],
    declarations: [ HomeComponent, PricingComponent,PricingHomeComponent,TestComponent ],
    exports:[ HomeComponent, PricingComponent, PricingHomeComponent ],
    providers: []
})
export class HomeModule { }
