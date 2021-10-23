import { CartService } from './../../services/cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter/counter.service';

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
    private counterService: CounterService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // this.counterService
    // .getCounter()
    // .subscribe((counter) => this.counter = counter);

    this.cartService.getProducts().subscribe((data) => {
      this.products = data;
      this.grandTotalPrice = this.cartService.getTotalPrice();
      this.totalPrice= this.cartService.getTotalPriceItem(data)
    });
  }

  // increaseCounter(){
  //   this.counterService.setCounter(this.counter+1)
  // }

  // decreaseCounter(){
  //   this.counterService.setCounter(this.counter-1)
  // }

  removeItem(item: any) {
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
