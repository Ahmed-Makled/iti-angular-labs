import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  constructor() {}

  getProducts() {
    return this.productList.asObservable();
  }
  addtoCart(product: any) {
    if (this.cartItemList.length == 0) {
      this.cartItemList.push(product);
    } else {
     if(this.cartItemList.find((item: any) => item.id === product.id)){
      this.cartItemList.find((item: any) => item.id === product.id).qtn+=1
     }else{
      this.cartItemList.push(product);

     }
    }
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPriceItem(product: any){
    // console.log(this.cartItemList);
    let totalPrice = 0;
    if(this.cartItemList.find((item: any) => item.id === product.id)){
   let x =   this.cartItemList.find((item: any) => item.id === product.id).qtn ;
   console.log(x);

    }
  
    return totalPrice;
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    this.cartItemList.map((item: any) => {
      totalPrice += item.price;
    });
    return totalPrice;
  }

  //remove qtn -1
  removeCartItem(product: any) {
    if(this.cartItemList.find((item: any) => item.id === product.id).qtn!==0){
      this.cartItemList.find((item: any) => item.id === product.id).qtn -= 1;

    }else{
      this.removeFromCart(product);
    }
    this.productList.next(this.cartItemList);
  }


  //remove item
  removeFromCart(product: any){
    this.cartItemList.map((item: any, index: any) => {
      if (product.id === item.id) {
        this.cartItemList.splice(index, 1);
      }
    });

    this.productList.next(this.cartItemList);
  }

  
  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
