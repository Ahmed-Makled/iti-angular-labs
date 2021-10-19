import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()  productItem: any;
  @Output() sendPrdItem = new EventEmitter();

  constructor() { 
  
  }

  ngOnInit(): void {
  }
  selectItem(){
    this.sendPrdItem.emit(this.productItem)
  }

}
