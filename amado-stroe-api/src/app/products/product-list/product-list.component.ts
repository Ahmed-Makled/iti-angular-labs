import { Iproduct } from './../../models/iproduct';
import { Component, OnInit, } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList!: any;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.fetchProducts().subscribe(
      (data) => {
        
        this.productList=Object.values(data).map((item)=>{return {...item,qtn:1}})


      },
      (error) => console.log(error)
    );
  }

  ProductItemRecived(item: Iproduct) {
    console.log('FROM PARENT', item);
  }
}
