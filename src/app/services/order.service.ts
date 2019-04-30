import { Injectable } from '@angular/core';
import { Order } from 'app/models/model.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private order: Order;

  getOrder() {
    return this.order;
  }

  setOrder(order: Order) {
    this.order = order;
  }

  constructor() { }
}
