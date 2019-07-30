import { Injectable } from '@angular/core';
import { Order, OrderDetails, Address, User } from 'app/models/model.interface';
import { IProducts } from 'app/products';
import { HttpClient } from '@angular/common/http';

const products: IProducts[] = [
  { product_id: 'pd001', product_img : 'assets/img/shirt.svg', product_name : 'Shirt',
  product_price : 15, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd002', product_img : 'assets/img/t-shirt.svg', product_name : 'T-Shirt',
  product_price : 15, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd003', product_img : 'assets/img/trousers.svg', product_name : 'Formal Pants',
  product_price : 15, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd004', product_img : 'assets/img/jeans.svg', product_name : 'Jeans',
  product_price : 15, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd005', product_img : 'assets/img/blouse.svg', product_name : 'Tees/Tops',
  product_price : 15, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Women'},
  { product_id: 'pd006', product_img : 'assets/img/shirt.svg', product_name : 'Shirt',
  product_price : 15, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Women'},
  { product_id: 'pd007', product_img : 'assets/img/dress.svg', product_name : 'Dress',
  product_price : 40, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Women'},
  { product_id: 'pd008', product_img : 'assets/img/leggings.svg', product_name : 'Jeans/Jeggings/Plazzos',
  product_price : 15, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Women'},
]

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order: Order;

  constructor(private http: HttpClient) {
    this.order = new Order;
    this.order.details = [];
  }

  public getProducts() {
    return products;
  }

  public getOrder() {
    return this.order;
  }

  public resetOrder(order: Order) {
    this.order = order;
    this.order.details = [];
    products.forEach(prod => {
      prod.product_quantity = 0;
    });
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

  public AddFinalPrice(finalPrice: number) {
    this.order.finalPrice = finalPrice;
  }

  public AddCheckoutDetails(order: Order) {
    this.order.address = order.address;
    this.order.name = order.name;
    this.order.finalPrice = order.finalPrice;
    this.order.phone = order.phone;
    this.order.email = order.email;
    this.order.pickUpDateTime = order.pickUpDateTime;
    this.order.couponCode = order.couponCode;
    this.order.comments = order.comments;
  }

  public sendEmail(url, data) {
    return this.http.post(url, data);
  }
}
