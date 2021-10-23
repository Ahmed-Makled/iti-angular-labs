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
    console.log(product);
    let totalPrice = 0

    if(this.cartItemList.find((item: any,index:number) => item.id === product[index].id)){
      totalPrice =
      this.cartItemList.find((item: any,index:number) => item.id === product[index].id).price*
      this.cartItemList.find((item: any,index:number) => item.id === product[index].id).qtn
    }
    console.log(totalPrice);
    // this.cartItemList.map((item: any) => {
    //   totalPrice = item.price*item.qtn;
    // });
    return totalPrice;
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    this.cartItemList.map((item: any) => {
      totalPrice += item.price;
    });
    return totalPrice;
  }

  removeCartItem(product: any) {

    if(this.cartItemList.find((item: any) => item.id === product.id).qtn!==0){
      this.cartItemList.find((item: any) => item.id === product.id).qtn -= 1;

    }else{
      this.removeFromCart(product);
    }
    this.productList.next(this.cartItemList);
  }

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
