import { CartService } from './../../services/cart/cart.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter/counter.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit,OnChanges {
  counter!: number;
  public products: any = [];
  public grandTotalPrice!: number;
  public totalPrice!: number;

  constructor(
    private counterService: CounterService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
        console.log("ngOnInit");
      this.cartService.getProducts().subscribe((data) => {
      this.products = data;
      this.grandTotalPrice = this.cartService.getGrandTotalPrice();
      this.totalPrice= this.cartService.getTotalPriceItem(data)
    });
  }

    removeItem(item: any) {
    this.cartService.removeItem(item);
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

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

 
}
