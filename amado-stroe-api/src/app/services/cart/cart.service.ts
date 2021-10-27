import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemList: any = [];
  private productList = new BehaviorSubject<any>([]);
  constructor() { }

  // get all product saved in cart
  getProducts() {
    return this.productList;
  }
  //add item to cart &&  ||  icrement item
  addtoCart(product: any) {
    console.log(product);
    if (this.cartItemList.length == 0) {
      this.cartItemList.push(product);
    } else {
      if (this.cartItemList.find((item: any) => item.id === product.id)) {
        this.cartItemList.find((item: any) => item.id === product.id).qtn += 1
      } else {
        this.cartItemList.push(product);
      }
    }
    this.productList.next(this.cartItemList);
    this.getGrandTotalPrice();
  }
  // calc total price of item
  getTotalPriceItem(product: any) {
    let totalPrice = 0

    if (this.cartItemList.find((item: any, index: number) => item.id === product[index].id)) {
      totalPrice =
        this.cartItemList.find((item: any, index: number) => item.id === product[index].id).price *
        this.cartItemList.find((item: any, index: number) => item.id === product[index].id).qtn
    }

    return totalPrice;
  }
  // calc grand total price of items in cart
  getGrandTotalPrice(): number {
    let totalPrice = 0;
    this.cartItemList.map((item: any) => {
      totalPrice += item.price;
    });
    return totalPrice;
  }


  //decrease qtn
  removeItem(product: any) {
    if (this.cartItemList.find((item: any) => item.id === product.id).qtn !== 0) {
      this.cartItemList.find((item: any) => item.id === product.id).qtn -= 1;
    } else {
      this.removeFromCart(product);
    }
    this.productList.next(this.cartItemList);
  }

  //remove item form cart
  removeFromCart(product: any) {
    this.cartItemList.map((item: any, index: any) => {
      if (product.id === item.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    // console.log(this.cartItemList);
    // console.log(this.productList);
    // this.productList.next(this.cartItemList);
  }
  // remove all items  || empty cart
  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

}
