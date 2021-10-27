import { Iproduct } from './../../models/iproduct';
import { Component, OnInit, } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList!: any;
  isLoading?: BehaviorSubject<boolean> ;

  constructor(private productService: ProductService,private loaderService : LoaderService) {}

  ngOnInit(): void {
    this.isLoading = this.loaderService.getLoader();

    this.productService.fetchProducts().subscribe(
      (data) => {
        
        this.productList=Object.values(data).map((item)=>{return {...item,qtn:1,totalPrice:Number(item.qnt*item.price)}})


      },
      (error) => console.log(error)
    );
  }

  ProductItemRecived(item: Iproduct) {
    console.log('FROM PARENT', item);
  }
}
