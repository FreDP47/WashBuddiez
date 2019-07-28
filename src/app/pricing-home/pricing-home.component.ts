import { Component, OnInit } from '@angular/core';
import { OrderService } from 'app/services/order.service';
import { IProducts } from 'app/products';

@Component({
  selector: 'app-pricing-home',
  templateUrl: './pricing-home.component.html',
  styleUrls: ['./pricing-home.component.css']
})
export class PricingHomeComponent {
  products: IProducts[];
  constructor( private orderService: OrderService) {
    this.products = orderService.getProducts();
  }
}
