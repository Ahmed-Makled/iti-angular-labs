import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: any;
  @Output() sendPrdItem = new EventEmitter();

  counter!: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  selectItem() {
    this.sendPrdItem.emit(this.productItem);
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
}
