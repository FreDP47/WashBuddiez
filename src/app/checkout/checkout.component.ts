import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { OrderDetails, Order } from 'app/models/model.interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  order: Order;
  constructor(private orderService: OrderService) {
    this.order = orderService.getOrder();
  }

  submitOrder() {
    if (this.order.finalPrice > 0) {
      if (this.order.couponCode != null) {
        this.order.finalPrice = this.order.finalPrice * 0.9;
        const orderSubmitStatus = this.orderService.AddCheckoutDetails(this.order);

        const alertelement = document.getElementById('alert');
        alertelement.innerText = 'Order submitted successfully.';
        alertelement.classList.add('alert-success');
        alertelement.style.display = 'block';

        this.orderService.setOrder(new Order());
      }
    } else {
      const alertelement = document.getElementById('alert');
      alertelement.innerText = 'There are no items in your cart. Please add some items from the pricing page.';
      alertelement.classList.add('alert-danger');
      alertelement.style.display = 'block';
    }
  }
}
