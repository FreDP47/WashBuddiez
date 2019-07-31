import { Injectable } from '@angular/core';
import { Order, OrderDetails, Address, User } from 'app/models/model.interface';
import { IProducts } from 'app/products';
import { HttpClient } from '@angular/common/http';

const products: IProducts[] = [
  //wash & fold for men
  { product_id: 'pd1', product_img : 'assets/img/shirt.svg', product_name : 'Shirt',              
  product_price : 15, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd2', product_img : 'assets/img/t-shirt.svg', product_name : 'T-Shirt',
  product_price : 15, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd3', product_img : 'assets/img/trousers.svg', product_name : 'Formal Pants',
  product_price : 15, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd4', product_img : 'assets/img/jeans.svg', product_name : 'Jeans',
  product_price : 15, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Men'},

  //wash & fold for women
  { product_id: 'pd5', product_img : 'assets/img/blouse.svg', product_name : 'Tees/Tops',
  product_price : 15, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Women'},
  { product_id: 'pd6', product_img : 'assets/img/WomenShirt.svg', product_name : 'Shirt',
  product_price : 15, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Women'},
  { product_id: 'pd7', product_img : 'assets/img/dress.svg', product_name : 'Dress',
  product_price : 40, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Women'},
  { product_id: 'pd8', product_img : 'assets/img/leggings.svg', product_name : 'Jeans',
  product_price : 15, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Women'},
  { product_id: 'pd9', product_img : '', product_name : 'Leggings',
  product_price : 15, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Women'},
  { product_id: 'pd10', product_img : '', product_name : 'Plazzos',
  product_price : 15, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Women'},

  //wash & fold for men
  { product_id: 'pd11', product_img : '', product_name : 'Kurta(Simple)',
  product_price : 15, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd12', product_img : '', product_name : 'Kurta(Premium)',
  product_price : 25, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd13', product_img : '', product_name : 'Boxer',
  product_price : 12, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd14', product_img : '', product_name : 'Shorts',
  product_price : 12, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd15', product_img : '', product_name : 'Lungi/Dhoti',
  product_price : 20, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd16', product_img : '', product_name : 'Sweater/Pull Over',
  product_price : 30, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd17', product_img : '', product_name : 'Sweat Shirt/ Sweat T-shirt',
  product_price : 20, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd18', product_img : '', product_name : 'Winter Cap',
  product_price : 25, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd19', product_img : '', product_name : 'Vest',
  product_price : 10, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd20', product_img : '', product_name : 'Brief/Underwear',
  product_price : 10, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd21', product_img : '', product_name : 'Track Pant/Trouser',
  product_price : 15, product_details : 'WASH & FOLD', product_quantity : 0, product_For: 'Men'},

  //WASH & STEAM IRON for men
  { product_id: 'pd22', product_img : 'assets/img/shirt.svg', product_name : 'Shirt',
  product_price : 20, product_details : 'WASH & STEAM IRON', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd23', product_img : 'assets/img/t-shirt.svg', product_name : 'T-Shirt',
  product_price : 20, product_details : 'WASH & STEAM IRON', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd24', product_img : 'assets/img/trousers.svg', product_name : 'Formal Pants',
  product_price : 20, product_details : 'WASH & STEAM IRON', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd25', product_img : 'assets/img/jeans.svg', product_name : 'Jeans',
  product_price : 20, product_details : 'WASH & STEAM IRON', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd26', product_img : '', product_name : 'Kurta(Simple)',
  product_price : 20, product_details : 'WASH & STEAM IRON', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd27', product_img : '', product_name : 'Kurta(Premium)',
  product_price : 35, product_details : 'WASH & STEAM IRON', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd28', product_img : '', product_name : 'Boxer',
  product_price : 15, product_details : 'WASH & STEAM IRON', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd29', product_img : '', product_name : 'Sweat Shirt/ Sweat T-shirt',
  product_price : 30, product_details : 'WASH & STEAM IRON', product_quantity : 0, product_For: 'Men'},

  //WASH & IRON for men
  { product_id: 'pd30', product_img : 'assets/img/shirt.svg', product_name : 'Shirt',
  product_price : 20, product_details : 'WASH & IRON', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd31', product_img : 'assets/img/t-shirt.svg', product_name : 'T-Shirt',
  product_price : 20, product_details : 'WASH & IRON', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd32', product_img : 'assets/img/trousers.svg', product_name : 'Formal Pants',
  product_price : 20, product_details : 'WASH & IRON', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd33', product_img : 'assets/img/jeans.svg', product_name : 'Jeans',
  product_price : 20, product_details : 'WASH & IRON', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd34', product_img : '', product_name : 'Kurta(Simple)',
  product_price : 20, product_details : 'WASH & IRON', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd35', product_img : '', product_name : 'Kurta(Premium)',
  product_price : 30, product_details : 'WASH & IRON', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd36', product_img : '', product_name : 'Boxer',
  product_price : 12, product_details : 'WASH & IRON', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd37', product_img : '', product_name : 'Shorts',
  product_price : 15, product_details : 'WASH & IRON', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd38', product_img : '', product_name : 'Vest',
  product_price : 12, product_details : 'WASH & IRON', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd39', product_img : '', product_name : 'Brief/Underwear',
  product_price : 12, product_details : 'WASH & IRON', product_quantity : 0, product_For: 'Men'},
  { product_id: 'pd40', product_img : '', product_name : 'Track Pant/Trouser',
  product_price : 20, product_details : 'WASH & IRON', product_quantity : 0, product_For: 'Men'},
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
