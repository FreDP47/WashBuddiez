import { Component, OnInit } from '@angular/core';
import { IProducts } from '../products';
import { OrderService } from '../services/order.service';
import { OrderDetails, Order } from 'app/models/model.interface';

const products: IProducts[] = [
  {
    product_id: 'pd001',
    product_img: "assets/img/shirt.svg",
    product_name: "shirt",
    product_price: 7,
    product_details: "wash with ironing",
    product_quantity: 0,

  },
  {
    product_id: 'pd002',
    product_img: "assets/img/shirt.svg",
    product_name: "jeans pant",
    product_price: 8,
    product_details: "wash with ironing",
    product_quantity: 0,
  },
  {
    product_id: 'pd003',
    product_img: "assets/img/shirt.svg",
    product_name: "handkerchief",
    product_price: 8,
    product_details: "wash with ironing",
    product_quantity: 0,
  },
  {
    product_id: 'pd004',
    product_img: "assets/img/shirt.svg",
    product_name: "shirt",
    product_price: 10,
    product_details: "wash with ironing",
    product_quantity: 0,
  },
  {
    product_id: 'pd005',
    product_img: "assets/img/shirt.svg",
    product_name: "shirt",
    product_price: 7,
    product_details: "wash with ironing",
    product_quantity: 0,
  },
  {
    product_id: 'pd006',
    product_img: "assets/img/shirt.svg",
    product_name: "jeans pant",
    product_price: 8,
    product_details: "wash with ironing",
    product_quantity: 0,
  },
  {
    product_id: 'pd007',
    product_img: "assets/img/shirt.svg",
    product_name: "jeans pant",
    product_price: 8,
    product_details: "wash with ironing",
    product_quantity: 0,
  },
  {
    product_id: 'pd008',
    product_img: "assets/img/shirt.svg",
    product_name: "jeans pant",
    product_price: 8,
    product_details: "wash with ironing",
    product_quantity: 0,
  }
]

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  order: Order;
  products: IProducts[];
  total = 0;
  constructor(private orderService: OrderService) {
    this.products = products;
    this.order = orderService.getOrder();
    if (this.order != null && this.order.details != null) {
      const orderDetails: OrderDetails[] = this.order.details;
      this.products.forEach(prod => {
        orderDetails.forEach(orderDetail => {
          if (prod.product_name === orderDetail.apparel) {
            prod.product_quantity = orderDetail.quantity;
          }
        })
      });
    }
  }

  totalPrice() {
    this.total = 0;
    for (let i = 0; i < this.products.length; i++) {
      this.total += (this.products[i].product_price * this.products[i].product_quantity);
    }
  }

  add(pid) {
    console.log(pid);
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].product_id === pid) {
        this.products[i].product_quantity += 1;
      }
    }

    this.totalPrice();
    console.log(this.products);
  }

  del(pid) {
    console.log(pid);
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].product_id === pid && this.products[i].product_quantity > 0) {
        this.products[i].product_quantity -= 1;
      }
    }

    this.totalPrice();
    console.log(this.products);
  }

  AddOrderDetails() {
    this.products.forEach(prod => {
      if (prod.product_quantity > 0) {
        const orderDetail = new OrderDetails();
        orderDetail.apparel = prod.product_name;
        orderDetail.quantity = prod.product_quantity;
        this.orderService.AddOrderDetails(orderDetail);
      }
    });
  }
}
