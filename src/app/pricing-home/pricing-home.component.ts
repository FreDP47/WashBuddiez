import { Component, OnInit } from '@angular/core';
import { IProducts } from '../products';

const products: IProducts[]= [
  {
    product_id: 'pd001',
    product_img : "assets/img/shirt.svg",
    product_name : "shirt",
    product_price : 7,
    product_details : "wash with ironing",
    product_quantity :0,

  },
  {
    product_id: 'pd002',
    product_img : "assets/img/t-shirt.svg",
    product_name : "t-shirt",
    product_price : 8,
    product_details : "wash with ironing",
    product_quantity :0,
  },
  {
    product_id: 'pd003',
    product_img : "assets/img/trousers.svg",
    product_name : "trousers",
    product_price : 8,
    product_details : "wash with ironing",
    product_quantity :0,
  },
{
  product_id: 'pd004',
  product_img : "assets/img/jeans.svg",
  product_name : "jeans",
  product_price : 10,
  product_details : "wash with ironing",
  product_quantity :0,
},
{
  product_id: 'pd005',
  product_img : "assets/img/blouse.svg",
  product_name : "blouse",
  product_price : 7,
  product_details : "wash with ironing",
  product_quantity :0,
},
{
  product_id: 'pd004',
  product_img : "assets/img/shirt.svg",
  product_name : "shirt",
  product_price : 10,
  product_details : "wash with ironing",
  product_quantity :0,
},{
  product_id: 'pd004',
  product_img : "assets/img/dress.svg",
  product_name : "dress",
  product_price : 10,
  product_details : "wash with ironing",
  product_quantity :0,
},{
  product_id: 'pd004',
  product_img : "assets/img/leggings.svg",
  product_name : "leggings",
  product_price : 10,
  product_details : "wash with ironing",
  product_quantity :0,
}

]


@Component({
  selector: 'app-pricing-home',
  templateUrl: './pricing-home.component.html',
  styleUrls: ['./pricing-home.component.css']
})
export class PricingHomeComponent {
  products;
  constructor(){
  
this.products= products;
  }


}
