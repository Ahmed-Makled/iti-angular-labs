import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { CounterService } from 'src/app/services/counter/counter.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()  productItem: any;
  @Output() sendPrdItem = new EventEmitter();
  
  counter!: number ;

  constructor(private counterService: CounterService ,private cartService : CartService) { 
  
  }

  ngOnInit(): void {
    // this.counterService
    // .getCounter()
    // .subscribe((counter) => this.counter = counter);
  }

  selectItem(){
    this.sendPrdItem.emit(this.productItem)
  }

  // increaseCounter(){
  //   this.counterService.setCounter(this.counter+1)
  // }
  
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}
