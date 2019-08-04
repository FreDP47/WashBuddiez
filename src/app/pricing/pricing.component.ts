import { Component, OnInit } from '@angular/core';
import { IProducts } from '../products';
import { OrderService } from '../services/order.service';
import { OrderDetails, Order } from 'app/models/model.interface';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  order: Order;
  products: IProducts[];
  productCategories: string[] = ['Men', 'Women', 'Children', 'Household', 'Accessories',
  'Winter Wear', 'Addon', 'Vehicle Wash', 'Shoe Polish'];
  selectedProductCategory = this.productCategories[0];
  washCategories: string[] = ['WASH & FOLD', 'WASH & STEAM IRON', 'WASH & IRON', 'EXPRESS WASH',
  'STEAM IRON', 'STARCH WASH', 'DRY CLEAN', 'MENDING SINGLE', 'DYING', '1 PC', 'WATER WASH (Only Vehicle Wash)',
  'FOAM WASH (Only Vehicle Wash)', 'FOAM WASH & VACCUM (Only Vehicle Wash)', 'SHOE POLISH (Only Shoe Polish)'];
  selectedWashCategory = this.washCategories[0];
  filteredProducts: IProducts[];
  total = 0;
  constructor(private orderService: OrderService) {
    this.products = orderService.getProducts();
    this.order = orderService.getOrder();
    this.FilterProducts(this.selectedProductCategory, this.selectedWashCategory);
    if (this.order != null && this.order.details != null) {
      const orderDetails: OrderDetails[] = this.order.details;
      this.products.forEach(prod => {
        orderDetails.forEach(orderDetail => {
          if (prod.product_name === orderDetail.apparel) {
            prod.product_quantity = orderDetail.quantity;
          }
        })
      });

      this.totalPrice();
    }
  }

  totalPrice() {
    this.total = 0;
    for (let i = 0; i < this.products.length; i++) {
      this.total += (this.products[i].product_price * this.products[i].product_quantity);
    }
  }

  add(pid) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].product_id === pid) {
        this.products[i].product_quantity += 1;
      }
    }

    this.totalPrice();
  }

  del(pid) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].product_id === pid && this.products[i].product_quantity > 0) {
        this.products[i].product_quantity -= 1;
      }
    }

    this.totalPrice();
  }

  AddOrderDetails() {
    this.products.forEach(prod => {
      const orderDetail = new OrderDetails();
      if (prod.product_quantity > 0) {
        orderDetail.apparel = prod.product_name;
        orderDetail.quantity = prod.product_quantity;
        orderDetail.productType = prod.product_For;
        orderDetail.washType = prod.product_details;

        this.orderService.AddOrderDetails(orderDetail);
      }
    });

    this.orderService.AddFinalPrice(this.total);
  }

  FilterProducts(prodCat: string, washCat: string) {
    this.filteredProducts = this.products.filter(m => m.product_For === prodCat && m.product_details === washCat);
    return this.filteredProducts;
  }
}
