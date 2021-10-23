import { CartService } from './../../services/cart/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  counter!: number;
  public products: any = [];
  public grandTotalPrice!: number;
  public totalPrice!: number;

  constructor(

    private cartService: CartService
  ) {}

  ngOnInit(): void {
  
    this.cartService.getProducts().subscribe((data) => {
      this.products = data;
      this.grandTotalPrice = this.cartService.getTotalPrice();
      this.totalPrice= this.cartService.getTotalPriceItem(this.products)
    });
  }

  
  removeItem(item: any) {
    console.log(item);
    this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }

  removeFromCart(item: any){
   
    this.cartService.removeFromCart(item);
  }
 
 
}
