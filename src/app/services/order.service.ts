import { Injectable } from '@angular/core';
import { Order, OrderDetails, Address, User } from 'app/models/model.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order: Order;

  getOrder() {
    return this.order;
  }

  setOrder(order: Order) {
    this.order = order;
  }

  constructor() {
    this.order = new Order;
    this.order.details = [];
  }

  public AddOrderDetails(orderDetails: OrderDetails) {
    let apparelPresent: Boolean = false;
    this.order.details.forEach(orderDetail => {
      if (orderDetail.apparel === orderDetails.apparel) {
        orderDetail.quantity = orderDetails.quantity;
        apparelPresent = true
      }
    })

    if (!apparelPresent) {
      this.order.details.push(orderDetails);
    }
  }
}
