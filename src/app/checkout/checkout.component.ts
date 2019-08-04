import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from 'app/models/model.interface';
import {environment} from '../../environments/environment.prod';

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
    const overlayElement = document.getElementById('overlay');
    const alertelement = document.getElementById('alert');

    if (this.order.finalPrice > 0) {
      if (this.order.couponCode != null && this.order.couponCode !== ''
      && this.order.couponCode.toLocaleLowerCase() === 'Wash@10'.toLocaleLowerCase()) {
        this.order.finalPrice = this.order.finalPrice * 0.9;
        this.orderService.AddCheckoutDetails(this.order);
      }

      // Sending mail to user and to Admin
      overlayElement.style.display = 'block';
      this.orderService.sendEmail(`${environment.api_url}/sendmail`, this.order).subscribe(
        data => {
          const res: any = data;
          alertelement.innerText = 'Order submitted successfully.';
          alertelement.classList.add('alert-success');
          alertelement.style.display = 'block';
          this.orderService.resetOrder(new Order());
          overlayElement.style.display = 'none';
        },
        err => {
          console.log(err);
          alertelement.innerText = 'Some error occurred. Please try again later.';
          alertelement.classList.add('alert-danger');
          alertelement.style.display = 'block';
          this.orderService.resetOrder(new Order());
          overlayElement.style.display = 'none';
        });
    } else {
      alertelement.innerText = 'There are no items in your cart. Please add some items from the pricing page.';
      alertelement.classList.add('alert-danger');
      alertelement.style.display = 'block';
    }
  }
}
