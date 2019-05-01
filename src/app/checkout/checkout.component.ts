import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { OrderDetails } from 'app/models/model.interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  orderDetails: OrderDetails[];
  constructor(private orderService: OrderService) {
    this.orderDetails = orderService.getOrder().details;
  }
}
